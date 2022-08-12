/*
 * @Description: cycle detected in promise
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-12 11:22:22
 * @LastEditTime: 2022-08-12 16:45:25
 */
import MyPromise from "../core/index.js";
function p1() {
  return new MyPromise(function (resolve, reject) {
    setTimeout(function () {
      resolve('p1')
    }, 2000)

  })
}
let p1 = new MyPromise((resolve, reject) => {
  resolve('success')
})
let p2 = p1.then((value) => {
  console.log(value)
  return p2
}, (reason) => { console.log(reason) })


p2.then(value => {
  console.log(value)
}, reason => {
  console.log(reason)
}
)
