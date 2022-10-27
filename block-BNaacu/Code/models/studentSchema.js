var express = require('express');
const { default: mongoose } = require('mongoose');
var Schema = mongoose.Schema;

var studentSchema = new Schema({
  name: { type: String, required: true, minlength: 5 },
  age: { type: Number, required: true, default: 15 },
  email: { type: String, required: true, lowercase: true, trim: true },
});

module.exports = mongoose.model('Student', studentSchema);
