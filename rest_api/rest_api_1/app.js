const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const uploadRoutes = require('./routes/uploadRoutes');

const app = express();

app.use(bodyParser.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  next();
});

app.use(userRoutes);
app.use(authRoutes);
app.use(uploadRoutes);

app.use((err, req, res, next) => {
  console.log(err);
})

mongoose.connect(
  'mongodb+srv://arpitgupta1250:3LgX9vc6lGgGJAkL@cluster0.rktw7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
).then(result => {
})
.catch(err => console.log(err));

app.listen(5000);