/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-12 11:37:28
 * @LastEditTime: 2022-08-12 11:42:00
 */
import MyPromise from "../core/index.js";

let x = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 2000)
})

let y = x.then((value) => {
  // value是上一个then回调函数的返回值
  console.log('valu', value)
  // 返回一个普通值
  return 'aaa'
}, (reason) => { console.log(reason) })

y.then((value) => {
  console.log(value)
}, (reason) => {
  console.log(reason)
})