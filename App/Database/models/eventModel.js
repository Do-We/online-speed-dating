var mongoose = require('mongoose');
var schema = require('../schema.js');

var Event = mongoose.model('Event', schema.eventSchema);


module.exports = Event;