var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, lowercase: true },
  age: { type: Number, min: 15, max: 100 },
  address: { type: String },
  bio: { type: String },
  hobbies: { type: String },
});

var User = mongoose.model('User', userSchema);
module.exports = User;
