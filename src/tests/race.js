/*
 * @Description: cycle detected in promise
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-12 11:22:22
 * @LastEditTime: 2022-08-12 20:18:38
 */
import MyPromise from "../core/index.js";
function p1() {
  return new MyPromise(function (resolve, reject) {
    setTimeout(function () {
      resolve('p1')
    }, 4000)
  })
}

function p2() {
  return new MyPromise(function (resolve, reject) {
    setTimeout(function () {
      reject('p2')
    }, 1000)
  })
}

MyPromise.race([p1(), p2()]).then(result => { console.log(result) }, result => { console.log(result) })