/*
 * @Description: 实现并发控制，控制请求并发数
 * @version:
 * @Author: Murphy
 * @Date: 2022-10-27 13:16:46
 * @LastEditTime: 2022-10-27 16:46:12
 */
async function asyncPool(poolLimit, array, iteratorFn) {
  const ret = []; // 存储所有的异步任务
  const executing = []; // 存储正在执行的异步任务
  for (const item of array) {
    // 创建异步任务，调用iteratorFn函数
    const p = Promise.resolve().then(() => iteratorFn(item, array));
    ret.push(p); // 保存新的异步任务
    console.log('ret',ret);
    // 当poolLimit值小于或等于总任务个数时，进行并发控制
    if (poolLimit <= array.length) {
      // 当任务完成后，从正在执行的任务数组中移除已完成的任务
      const e = p.then(() => executing.splice(executing.indexOf(e), 1));
      executing.push(e); // 保存正在执行的异步任务
      console.log('exe',executing);
      if (executing.length >= poolLimit) {
        await Promise.race(executing); // 等待较快的任务执行完成
      }
    }
  }
  return Promise.all(ret);
}

const timeout = i => new Promise(resolve => setTimeout(() => resolve(i), i));

const result = await asyncPool(2, [1000, 5000, 3000, 2000], timeout);
console.log(result);