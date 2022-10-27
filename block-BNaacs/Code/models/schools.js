var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schoolSchema = new Schema(
  {
    name: { type: String, required: true },
    city: { type: String, trim: true, lowercase: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model('School', schoolSchema);
