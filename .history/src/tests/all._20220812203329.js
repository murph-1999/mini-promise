/*
 * @Description: cycle detected in promise
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-12 11:22:22
 * @LastEditTime: 2022-08-12 20:32:40
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



setTimeout(() => {
  try {
    let x = successCallback(this.value)

    resolvePromise(promise2, x, resolve, reject)
  } catch (e) {
    // 把这个错误传给下一个promise的回调函数
    reject(e)
  }

}, 0);