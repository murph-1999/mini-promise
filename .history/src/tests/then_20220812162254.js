let promise = new Promise((resolve, reject) => {
  resolve('success')
})
promise.then().then().then(value => { console.log(value) })