var express = require("express")
var mongoose = require("mongoose")
var router = express.Router();
var pathname = require("path")
var User = require(pathname.join(__dirname, '../', "models", "userSchema.js"))

router.get("/users/new", (req, res)=>{
  res.render("form.ejs")
})
router.get("/users", (req, res, next)=>{
  User.find({}, (err, users)=>{
    if(err) next(err);
    res.render("list", {users})
  })
})
module.exports = router;

