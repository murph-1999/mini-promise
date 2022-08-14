/*
 * @Description: test Promise.resolve
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-12 11:22:22
 * @LastEditTime: 2022-08-14 18:09:09
 */
import MyPromise from "../core/index.js";


MyPromise.resolve('hello world').then(value => { console.log(value) })