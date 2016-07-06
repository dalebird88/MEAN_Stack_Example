// DEPENDENCIES
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Message = new Schema({
  author: {type: Schema.Types.ObjectId, ref:'User'},
  body: {type: String},
  created: {type: Date, default: new Date()}
});

module.exports = mongoose.model('messages', Message);
