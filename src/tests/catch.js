/*
 * @Description: test p.catch()
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-12 11:22:22
 * @LastEditTime: 2022-08-14 19:01:45
 */
import MyPromise from "../core/index.js";
function p1() {
  return new MyPromise((resolve, reject) => {
    reject('fail p1')
  })
}

p1().then((value) => {
  console.log(value)
  // 如果这里 return 一个 promise 对象呢
}).catch(reason => {
  console.log(reason)
})