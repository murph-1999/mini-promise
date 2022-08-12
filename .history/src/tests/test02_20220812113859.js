/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-12 11:37:28
 * @LastEditTime: 2022-08-12 11:38:02
 */
import MyPromise from "../core/index.js";

let x = new MyPromise((resolve, reject) => {
  //throw new Error('error')
  //resolve(3)
  setTimeout(() => {
    resolve('success')
  }, 2000)
})
let y = x.then((value) => {
  // value是上一个then回调函数的返回值
  console.log(value)
  // 返回一个普通值
  return 'aaa'
}, (reason) => { console.log(reason) })

y.then((value) => {
  console.log(value)
}, (reason) => {
  console.log(reason)
})
