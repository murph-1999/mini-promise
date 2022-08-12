/*
 * @Description:异步
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-12 11:37:28
 * @LastEditTime: 2022-08-12 16:00:38
 */
import MyPromise from "../core/index.js";

let p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 2000)
})

p.then((value) => {
  console.log(value)
  return 'hello world'
}, (reason) => { console.log(reason) }).then((value) => {
  console.log(value)
}, (reason) => { console.log(reason) })

