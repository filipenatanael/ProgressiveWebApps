/*
In this exercise:
Promise 2 rejects, so the Promise.all method will fail and reject,
causing the 'catch' call to fire and thus assigning outcome a value of false.
*/

let outcome

let promise1 = new Promise((resolve, reject) => {
  resolve('Promise 1 Done')
})

let promise2 = new Promise((resolve, reject) => {
  reject('Promise 2 Failed')
})

let promise3 = new Promise((resolve, reject) => {
  resolve('Promise 3 Done')
})

Promise.all([ promise1, promise2, promise3 ])
.then( (val) => { outcome = val
  console.log(outcome) } )
  .catch( (err) => {outcome = false
    console.log(outcome)
  })
