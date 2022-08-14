/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-12 11:22:22
 * @LastEditTime: 2022-08-14 18:08:19
 */
import MyPromise from "../core/index.js";
function p1() {
  return new MyPromise(function (resolve, reject) {
    setTimeout(function () {
      resolve('p1')
    }, 2000)
  })
}

function p2() {
  return new MyPromise(function (resolve, reject) {
    setTimeout(function () {
      resolve('p2')
    }, 2000)
  })
}

MyPromise.all(['a', 'b', p1(), p2()]).then(result => { console.log(result) })



