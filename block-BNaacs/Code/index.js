var express = require('express');
var mongoose = require('mongoose');
var School = require('./models/schools');
var pathname = require('path');
mongoose.connect(
  'mongodb://localhost:27017/schoolDB',
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : `DB Connected`);
  }
);

var app = express();
app.use(express.json());
app.set('view engine', 'ejs');
app.set('views', pathname.join(__dirname, 'views'));
app.use((req, res, next) => {
  res.locals.greet = 'Hello Everyone';
  next();
});
app.post('/schools', (req, res, next) => {
  School.create(req.body, (err, school) => {
    if (err) next(err);
    res.send(`${school.name}, ${school.city} has been created in database`);
  });
});
app.get('/schools', (req, res, next) => {
  School.find({}, (err, schools) => {
    let schoolsInfo = schools;
    res.render('index', { schoolsInfo });
  });
});
app.use((err, req, res, next) => {
  res.send(`${err}"`);
});
app.listen(3000, 'localhost', () => {
  console.log('Server started');
});
