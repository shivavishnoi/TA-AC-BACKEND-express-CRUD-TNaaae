var express = require('express');
const path = require('path');
var router = express.Router();
var User = require('../models/userSchema');

router.post('/users', (req, res, next) => {
  User.create(req.body, (err, user) => {
    if (err) return next(err);
    res.redirect('/users');
  });
});
router.get('/users', (req, res, next) => {
  User.find({}, (err, userList) => {
    if (err) return next(err);
    res.render('listUsers', { users: userList });
  });
});
module.exports = router;
