const util = require('util');

function usingCallback(cb) {
  setTimeout(() => {
    cb(null, 'Hello');
  }, 2000);
}

const promise = util.promisify(usingCallback);

promise().then((res) => {
  console.log('-----------',res)
});