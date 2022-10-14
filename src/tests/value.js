/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-12 11:37:28
 * @LastEditTime: 2022-10-14 14:05:59
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
  // 返回一个普通值 试试返回一个promise吧
  return 'aaa'
}, (reason) => { console.log(reason) })

y.then((value) => {
  console.log('value', value)
}, (reason) => {
  console.log(reason)
})


// Promise.resolve(1)
//   .finally((data) => {
//     console.log(data)
//     return Promise.reject('error')
//   })
//   .catch((error) => {
//     console.log(error)
//     throw 'error2'
//   })
//   .finally((data) => {
//     console.log(data)
//     return Promise.resolve(2).then(console.log)
//   })
//   .then(console.log)
//   .catch(console.log)

