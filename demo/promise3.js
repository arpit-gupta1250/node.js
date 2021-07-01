const condition = true

const promise1 = new Promise((resolve, reject) => {
  const text = 'Hello from promise 1';
  if(condition){
    resolve(text)
  } else {
    reject(text)
  }
})

const promise2 = new Promise((resolve, reject) => {
  const text = 'Hello from promise 2';
  if(condition){
    resolve(text)
  } else {
    reject(text)
  }
})

Promise.all([promise1, promise2])
  .then(([res1, res2]) => {
    console.log(res1, '----------', res2);
  })
  .catch((err) => {
    console.log(err);
  }) 

console.log(promise1)
console.log(promise2)