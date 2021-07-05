const http = require('http')
const fs = require('fs')

http.createServer((req, res) => {
  const stream = fs.createReadStream('text.txt')
  stream.pipe(res)
}).listen(3000)