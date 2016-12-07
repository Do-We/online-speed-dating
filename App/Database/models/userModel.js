var mongoose = require('mongoose');
var schema = require('../schema.js');

var User = mongoose.model('User', schema.userSchema);

module.exports = User;