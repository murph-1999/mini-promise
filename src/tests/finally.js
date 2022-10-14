/*
 * @Description: test p.finally()
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-12 11:22:22
 * @LastEditTime: 2022-10-14 15:18:43
 */
import MyPromise from "../core/index.js";
function p1() {
  return new MyPromise(resolve => resolve('hello p1'))
}
function p2() {
  return new MyPromise(resolve => setTimeout(function () { resolve('hello p2') }, 2000))
}


// 对比then和finally的执行结果
p1().then(() => {
  console.log('hello promise')
  // 返回一个promise对象
  return p2()
}).then((value) => { console.log(value) })

p1().finally(() => {
  console.log('hello promise')
  return p2()
}).then((value) => { console.log(value) })