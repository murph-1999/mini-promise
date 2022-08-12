let x = new MyPromise((resolve, reject) => {
  //throw new Error('error')
  //resolve(3)
  setTimeout(() => {
    resolve('success')
  }, 2000)
})
let y = x.then((value) => {
  // value是上一个then回调函数的返回值
  console.log(value)
  return 'aaa'
}, (reason) => { console.log(reason) })
y.then((value) => {
  console.log(value)
}, (reason) => {
  console.log(reason)
})
