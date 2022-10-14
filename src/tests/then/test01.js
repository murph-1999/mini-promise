/*
 * @Description:多次调用同一个promise的then方法
 * @version:
 * @Author: Murphy
 * @Date: 2022-10-14 14:50:24
 * @LastEditTime: 2022-10-14 15:00:36
 */

import MyPromise from "../../core/index.js";

let promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 3000)
})
promise.then(value => {
  console.log(value)
}, reason => {
  console.log(reason)
})

promise.then(value => {
  console.log(value)
}, reason => {
  console.log(reason)
})

