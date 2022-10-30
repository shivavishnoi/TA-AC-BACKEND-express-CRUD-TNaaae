var express = require('express');
var mongoose = require('mongoose');
var pathname = require('path');
var indexRouter = require(pathname.join(__dirname, 'routers/index'));
var userRouter = require(pathname.join(__dirname, 'routers/users'));

//Database connection
mongoose.connect(
  'mongodb://localhost:27017/User',
  { useUnifiedTopology: true, useNewUrlParser: true },
  (err) => {
    console.log(err ? err : `Connected to DB`);
  }
);

//app initiate
var app = express();

// data parse
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

//views
app.set('view engine', 'ejs');
app.set('views', pathname.join(__dirname, 'views'));

//routers
app.use('/', indexRouter);
app.use('/users', userRouter);

//Error Handling
app.use((req, res, next) => {
  res.status(404).send('Error 404: Page Not Found');
  next();
});
app.use((err, req, res, next) => {
  res.send(err);
});
//Listen
app.listen(3000, 'localhost', () => {
  console.log(`Server at 3k`);
});
