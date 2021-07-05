const fs = require('fs');

const file = fs.createWriteStream('text.txt');

for(let i=0; i <= 10000; i++) {
  file.write('aaaaaaaaaaaabbbbbbbbbbbbbbcccccccccccccccccccdddddddddddddddddddddd\n');
}

file.end();