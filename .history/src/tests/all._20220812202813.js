/*
 * @Description: cycle detected in promise
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-12 11:22:22
 * @LastEditTime: 2022-08-12 20:28:13
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



// 成功之后的值
value = undefined

// 失败之后的原因
reason = undefined
resolve = (value) => {
  if (this.status != PENDING) return
  this.status = FULFILLED
  // 保存成功之后的值
  this.value = value
}
reject = (reason) => {
  if (this.status != PENDING) return
  this.status = REJECTED
  // 保存失败后的原因
  this.reason = reason
}
then(onFulfilled, onRejected){
  if (this.status === FULFILLED) {
    onFulfilled(this.value)
  } else if (this.status === Rejected) {
    onRejected(this.reason)
  }
}