const promise = Promise.resolve('Hello, World!');

console.log(promise)
promise.then(res => console.log(res));