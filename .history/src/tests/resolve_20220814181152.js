/*
 * @Description: test Promise.resolve
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-12 11:22:22
 * @LastEditTime: 2022-08-14 18:11:52
 */
import MyPromise from "../core/index.js";
function p1() {
  return new MyPromise(resolve => resolve('hello world'))
}
// 传递非promise
MyPromise.resolve('hello world').then(value => { console.log(value) })
// 传递promise
MyPromise.resolve(p1()).then(value => { console.log(value) })