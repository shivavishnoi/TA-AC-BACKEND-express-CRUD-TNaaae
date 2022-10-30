var express = require('express');
const path = require('path');
var router = express.Router();
var User = require('../models/userSchema');

router.get('/new', (req, res) => {
  res.render('newUser');
});

router.get('/:id', (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render('userDetails', { user });
  });
});

router.get('/:id/delete', (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndDelete(id, (err, deletedUser) => {
    if (err) return next(err);
    res.redirect('/users');
  });
});
router.get('/:id/update', (req, res, next) => {
  var id = req.params.id;
  User.findById(id, (err, updatedUser) => {
    if (err) return next(err);
    res.render('userUpdate', { user: updatedUser });
  });
});
router.post('/:id', (req, res, next) => {
  var id = req.params.id;
  User.findByIdAndUpdate(id, req.body, { new: true }, (err, updatedUser) => {
    if (err) return next(err);
    res.redirect(`/users/${id}`);
  });
});
module.exports = router;
