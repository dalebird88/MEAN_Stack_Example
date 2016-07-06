// REQUIRE DEPENDENCIES
// ============================================================
var mongoose = require('mongoose');

// DEFINE SCHEMA
// ============================================================
var userSchema = mongoose.Schema({
  name: {type: String}
});

// EXPORT SCHEMA
// ============================================================
module.exports = mongoose.model('User', userSchema);
