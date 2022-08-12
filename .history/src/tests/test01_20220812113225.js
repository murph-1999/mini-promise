/*
 * @Description:cycle detected in promise
 * @version:
 * @Author: Murphy
 * @Date: 2022-08-12 11:22:22
 * @LastEditTime: 2022-08-12 11:32:25
 */
import { MyPromise } from "../core/index.js";
let p1 = promise.then((value) => {
  console.log(value)
  return p1
}, (reason) => { console.log(reason) })


p1.then(value => {
  console.log(value)
}, reason => {
  console.log(reason)
}
)
