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
router.get('/new', (req, res, next) => {
  res.render('form.ejs');
});
router.get('/:id', (req, res, next) => {
  var id = req.params.id;
  Student.findById(id, (err, student) => {
    console.log(student);
    if (err) next(err);
    res.render('studentOnly.ejs', { student });
  });
});
module.exports = router;
