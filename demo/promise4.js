const flag = false;
const promise = new Promise((resolve, reject) => {
  if(flag){
    resolve('Hello - Resolved');
  } else {
    reject('Hello - Rejected');
  }
})

promise
  .then(
    function onFulfilled(res) { console.log(res) },
    function onRejected(res) { console.log(res) }
  )
  .catch((err) => {
    console.log('--------', err);
  })