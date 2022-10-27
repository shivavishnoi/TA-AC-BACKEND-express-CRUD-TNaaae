var express = require('express');
var mongoose = require('mongoose');
var indexRouter = require('../Code/routers/index');
var studentRouter = require('../Code/routers/students');
var pathname = require('path');

mongoose.connect(
  'mongodb://localhost:27017/StudentDB',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : `DB Connected`);
  }
);

var app = express();
app.use(express.json());
app.use(express.urlencoded());
app.set('view engine', 'ejs');
app.set('views', pathname.join(__dirname, 'views'));
app.use('/', indexRouter);
app.use('/students', studentRouter);
app.use((err, req, res, next) => {
  console.log(err);
});
app.listen(5000, 'localhost', () => {
  console.log(`server at 5k`);
});
