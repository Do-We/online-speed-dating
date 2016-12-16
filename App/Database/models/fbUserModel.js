var mongoose = require('mongoose');
var schema = require('../schema.js');

var FbUser = mongoose.model('FbUser', schema.fbUserSchema);


module.exports = FbUser;