/*
 * @Description:cycle detected in promise
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-12 11:22:22
 * @LastEditTime: 2022-08-12 11:25:30
 */
import MyPromise from "../core/index";
let p1 = promise.then((value) => {
  console.log(value)
  // 返回一个promise
  // 这里返回的promise是有条件的，不可以是then方法返回的promise，会造成循环调用
  return p1
}, (reason) => { console.log(reason) })


p1.then(value => {
  console.log(value)
}, reason => {
  console.log(reason)
}
)
