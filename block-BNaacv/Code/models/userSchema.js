var express = require("express");
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var userSchema = new Schema ({
  name : {type : String, required :true},
  email: {type : String, required :true, lowercase :true, trim: true},
  age: {type : String, required: true}
})

var User = mongoose.model("User", userSchema);
module.exports = User;