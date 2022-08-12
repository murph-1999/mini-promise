/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-12 11:37:28
 * @LastEditTime: 2022-08-12 11:44:31
 */
import MyPromise from "../core/index.js";

let x = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('success')
  }, 2000)
})

let y = x.then((value) => {
  // value是上一个then回调函数的返回值
  console.log('value', value)
  // 返回一个普通值
  return 'aaa'
}, (reason) => { console.log('reason', reason) })

y.then((value) => {
  console.log('DDD', value)
}, (reason) => {
  console.log(reason)
})
