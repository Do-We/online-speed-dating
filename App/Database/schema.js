var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username: {type: String, required: true, index: { unique: true } },
  password: String,
  userinfo: {type: String, default: 'User did not provide info'},
  name: {type: String, default: 'please fill out'},
  age: {type: Number, default: '0'},
  location: {type: String, default: 'please fill out'},
  profileImg: {type: String, default: 'https://www.svgimages.com/svg-image/s4/question-mark-face-256x256.png'},
  gender: {type: String, default: 'please fill out'},
  admin: {type: Boolean, default: false},
  events: {type: Array, default: []},
  callList: {type: Array, default: []},
  matches: {type: Array, default: []},
  likes: {type: Array, default: []}
});

var eventSchema = mongoose.Schema({
  date: {type: Date, required: true },
  usernames: {type: Array, default: []},
  eventType: {type: String, default: 'please fill out'},
  eventName: {type: String, required: true, index: { unique: true }, default: 'please fill out'},
  eventCallDuration: {type: Number, default: 300000},
});

exports.userSchema = userSchema;
exports.eventSchema = eventSchema;