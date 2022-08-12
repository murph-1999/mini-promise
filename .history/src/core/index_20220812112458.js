const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
class MyPromise {
  constructor(executor) {
    // 捕捉执行器中的错误
    try {
      executor(this.resolve, this.reject)
    } catch (e) {
      this.reject(e)
    }
  }
  status = PENDING
  // 成功之后的值
  value = undefined
  // 失败之后的值
  reason = undefined
  // 成功回调
  successCallback = []
  // 失败回调
  errorCallback = []
  resolve = (value) => {
    //    如果状态不是等待，阻止程序向下执行
    if (this.status != PENDING) return
    // 更改状态为成功
    this.status = FULFILLED
    // 保存成功之后的值
    this.value = value
    // 异步代码执行完成后判断是否存在成功回调
    while (this.successCallback.length) this.successCallback.shift()()
  }
  reject = (reason) => {
    // 更改状态为失败
    if (this.status != PENDING) return
    this.status = REJECTED
    this.reason = reason
    // 异步代码执行完成后判断是否存在失败回调
    while (this.errorCallback.length) this.errorCallback.shift()()
  }
  // then方法返回一个promise对象
  then(successCallback, errorCallback) {
    // then中也可以不传递参数,但是要保证能够一直传递下去，直到传递给有参数的
    successCallback = successCallback ? successCallback : value => value
    errorCallback = errorCallback ? errorCallback : reason => { throw reason }
    let promise2 = new MyPromise((resolve, reject) => {
      // 判断状态
      if (this.status == FULFILLED) {
        // 保存用于链式调用的返回值
        setTimeout(() => {
          try {
            let x = successCallback(this.value)
            console.log('x', x)
            // 判断 x 的值是普通值还是promise对象
            // 如果是普通值，直接调用resolve
            // 如果是promise对象查看promise对象返回的结果
            // 根据返回的结果，决定调用resolve还是reject
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            // 把这个错误传给下一个promise的回调函数
            reject(e)
          }

        }, 0);

        // 下一个then的resolve回调
        //resolve(x)
      } else if (this.status == REJECTED) {
        setTimeout(() => {
          try {
            let x = errorCallback(this.reason)

            // 判断 x 的值是普通值还是promise对象
            // 如果是普通值，直接调用resolve
            // 如果是promise对象查看promise对象返回的结果
            // 根据返回的结果，决定调用resolve还是reject
            resolvePromise(promise2, x, resolve, reject)
          } catch (e) {
            // 把这个错误传给下一个promise的回调函数
            reject(e)
          }
        }, 0);
      } else {
        //状态未确定
        //异步代码
        this.successCallback.push(() => {
          setTimeout(() => {
            try {
              let x = successCallback(this.value)
              // 判断 x 的值是普通值还是promise对象
              // 如果是普通值，直接调用resolve
              // 如果是promise对象查看promise对象返回的结果
              // 根据返回的结果，决定调用resolve还是reject
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              // 把这个错误传给下一个promise的回调函数
              reject(e)
            }

          }, 0);
        })
        this.errorCallback.push(

          setTimeout(() => {
            try {
              let x = errorCallback(this.reason)
              // 判断 x 的值是普通值还是promise对象
              // 如果是普通值，直接调用resolve
              // 如果是promise对象查看promise对象返回的结果
              // 根据返回的结果，决定调用resolve还是reject
              resolvePromise(promise2, x, resolve, reject)
            } catch (e) {
              // 把这个错误传给下一个promise的回调函数
              reject(e)
            }
          }, 0)

        )
        // 当前状态是等待，因为执行器中是异步函数，状态还未改变，所以先临时存储回调
      }
    })
    return promise2
  }
  // 按照调用的顺序得到顺序结果
  static all(array) {
    let result = []
    let index = 0

    return new MyPromise((resolve, reject) => {
      function addData(key, value) {
        result[key] = value
        // 判断每个元素执行完成
        index++
        if (index === array.length) {
          resolve(result)
        }
      }
      for (let i = 0; i < array.length; i++) {
        let current = array[i]
        if (current instanceof MyPromise) {
          current.then(value => addData(i, value), (reason) => reject(reason))
        } else {
          // 普通值
          addData(i, array[i])
        }
      }

    })
  }
}

function resolvePromise(promise2, x, resolve, reject) {
  // 调用自身
  if (promise2 === x) {
    return reject(new TypeError('Chaining cycle detected for promise'))
  }
  if (x instanceof MyPromise) {
    x.then(resolve, reject)
  } else {
    resolve(x)
  }
}


//==========================================example========================================================


let promise = new MyPromise((resolve, reject) => {
  resolve('success')
  //resolve('success')
  //reject('fail')

})
// 先判断状态，若成功则调用成功回调函数，若失败则调用失败回调函数

function other() {
  return new MyPromise((resolve, reject) => {
    resolve('other')
  })
}
// let p1 = promise.then((value)=>{
//     console.log(value)
//     // 返回一个promise
//     // 这里返回的promise是有条件的，不可以是then方法返回的promise，会造成循环调用
//     return p1
// },(reason) => {console.log(reason)})


// p1.then(value => {
//        console.log(value)
//    },reason =>{
//        console.log(reason)
//    }
// )


let x = new MyPromise((resolve, reject) => {
  resolve(3)
})
let y = promise.then((value) => {
  // value是上一个then回调函数的返回值
  console.log(value)
  return y
})
y.then((value) => {
  console.log(value)
}, (reason) => {
  console.log(reason)
})