/*
 * @Description: cycle detected in promise
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-12 11:22:22
 * @LastEditTime: 2022-08-12 20:29:39
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



// 成功回调
onFulfilleds = []
// 失败回调
onRejecteds = []
resolve = (value) => {
    ...
  // 异步代码执行完成后判断是否存在成功回调
  while (this.onFulfilleds.length) this.onFulfilleds.shift()(this.value)
}
reject = (reason) => {
    ...
  // 异步代码执行完成后判断是否存在失败回调
  while (this.onRejecteds.length) this.onRejecteds.shift()(this.reason)
}

then(onFulfilled, onRejected){
  if (this.status === FULFILLED) {
    onFulfilled(this.value)
  } else if (this.status === Rejected) {
    onRejected(this.reason)
  } else {
    // 先将回调函数存储起来
    this.onFulfilleds.push(onFulfilled)
    this.onRejecteds.push(onRejected)
  }
}