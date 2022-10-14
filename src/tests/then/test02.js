/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-12 16:22:40
 * @LastEditTime: 2022-10-14 14:50:48
 */
import MyPromise from "../core/index.js";

// 对比这两个输出
MyPromise.resolve(1).then(() => 2).then(3).then(MyPromise.resolve(8)).then(console.log, (reason) => {
  console.log('reason', reason);
})

// 源码的promise就算then中传递的是非函数，依旧继续传递消息
// Promise.resolve(1).then(() => 2).then(3).then(Promise.resolve(8)).then(console.log, (reason) => {
//   console.log('reason', reason);
// })
MyPromise.resolve(1).then(() => 3).then(console.log)

let p = MyPromise.resolve(1).then(() => 3)
// promise pending 未决议出结果
console.log(p);
