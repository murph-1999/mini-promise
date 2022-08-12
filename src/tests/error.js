/*
 * @Description:捕捉异常
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-12 11:37:28
 * @LastEditTime: 2022-08-12 16:01:44
 */
import MyPromise from "../core/index.js";

let p = new MyPromise((resolve, reject) => {
  // throw new Error('executor error')
  resolve('success')
})

p.then((value) => {
  console.log(value)
  throw new Error('then error')
}, (reason) => {
  console.log(reason)
})
  .then((value) => {
    console.log(value)
  }, (reason) => {
    console.log(reason)
  })

