var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();
var pathname = require('path');
var Student = require(pathname.join(
  __dirname,
  '../',
  'models',
  'studentSchema.js'
));

router.post('/students', (req, res, next) => {
  Student.create(req.body, (err, student) => {
    if (err) next(err);
    res.send(`${student.name} added to db`);
  });
});
router.get('/students', (req, res, next) => {
  Student.find({}, (err, students) => {
    if (err) next(err);
    let studentsList = students;
    res.render('list.ejs', { studentsList });
  });
});

module.exports = router;
