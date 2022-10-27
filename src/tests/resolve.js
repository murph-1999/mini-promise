/*
 * @Description: test Promise.resolve
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-12 11:22:22
 * @LastEditTime: 2022-10-27 16:41:51
 */
import MyPromise from "../core/index.js";
function p1() {
  return new MyPromise(resolve => resolve('hello world'))
}
// 传递非promise
// MyPromise.resolve('hello world').then(value => { console.log(value) })
// // 传递promise
// MyPromise.resolve(p1()).then(value => { console.log(value) })


for (let index = 0; index < 6; index++) {
  console.log(Promise.resolve().then(value => { console.log(index) })
  )
}