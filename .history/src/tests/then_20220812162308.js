/*
 * @Description:
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-12 16:22:40
 * @LastEditTime: 2022-08-12 16:22:54
 */
import MyPromise from "../core/index.js";

let promise = new Promise((resolve, reject) => {
  resolve('success')
})
promise.then().then().then(value => { console.log(value) })