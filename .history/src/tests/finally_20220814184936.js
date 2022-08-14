/*
 * @Description: test p.finally()
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-12 11:22:22
 * @LastEditTime: 2022-08-14 18:49:36
 */
import MyPromise from "../core/index.js";
function p1() {
  return new MyPromise(resolve => resolve('hello world'))
}
function p2() {
  return new MyPromise(resolve => setTimeout(() => { resolve('hello world') }))
}
p1().finally(() => {
  console.log('hello promise')
  return p2()
  // 如果这里 return 一个 promise 对象呢
}).then((value) => { console.log(value) })