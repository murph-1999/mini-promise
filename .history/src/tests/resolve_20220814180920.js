/*
 * @Description: test Promise.resolve
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-12 11:22:22
 * @LastEditTime: 2022-08-14 18:09:09
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

MyPromise.resolve('hello world').then(value => { console.log(value) })