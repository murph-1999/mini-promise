/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-12 11:37:28
 * @LastEditTime: 2022-08-13 19:56:37
 */
import MyPromise from "../core/index.js";

let x = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 2000)
})

let y = x.then((value) => {
  // value是上一个then回调函数的返回值
  console.log(value)
  // 返回一个普通值 试试返回一个promise吧
  return 'aaa'
}, (reason) => { console.log(reason) })

y.then((value) => {
  console.log(value)
}, (reason) => {
  console.log(reason)
})


const p = Promise.resolve(4)
console.log(p)