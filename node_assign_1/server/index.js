const http = require('http');
const config = require('./config/index');
const mongoose = require('mongoose');
const userRoutes = require('./routes/UserRoute');

const server = http.createServer((req, res) => {
  if(req.url === '/api/create') {
    userRoutes(req, res);
  }
})

server.listen(config.PORT, () => {
  console.log('Server Started.')
})

mongoose.connect(
  config.DB_URL,
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
).then(() => console.log('DB connected successfully.'))
.catch((err) => {console.log(err)});