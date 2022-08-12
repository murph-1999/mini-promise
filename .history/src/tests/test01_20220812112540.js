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
  return p1
}, (reason) => { console.log(reason) })


p1.then(value => {
  console.log(value)
}, reason => {
  console.log(reason)
}
)
