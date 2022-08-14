/*
 * @Description: test p.finally()
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-12 11:22:22
 * @LastEditTime: 2022-08-14 18:33:49
 */
import MyPromise from "../core/index.js";
function p1() {
  return new MyPromise(resolve => resolve('hello world'))
}
p1().finally(() => {
  console.log('hello promise')
})