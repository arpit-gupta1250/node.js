const fs = require('fs');

const filepath = 'text.txt';
const read = function(){
  const data = fs.readFileSync(filepath, {encoding: 'utf8'});
  console.log(data)
}
read();
let sum = 0;
for(let i=1; i<=10; i++){
	sum = sum + i;
}
console.log('Sum: ', sum);