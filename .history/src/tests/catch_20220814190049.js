/*
 * @Description: test p.catch
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-12 11:22:22
 * @LastEditTime: 2022-08-14 19:00:40
 */
import MyPromise from "../core/index.js";
function p1() {
  return new MyPromise(resolve => resolve('hello p1'))
}
function p2() {
  return new MyPromise(resolve => setTimeout(() => { resolve('hello p2') }, 2000))
}
p1().then(() => {
  console.log('hello promise')
  return p2()
  // 如果这里 return 一个 promise 对象呢
}).then((value) => { console.log(value) })