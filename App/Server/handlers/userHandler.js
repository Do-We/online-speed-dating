var userModel = require('../../Database/models/userModel.js');
var db = require('../../Database/config.js');
var User = require('../../Database/models/userModel.js');
 
exports.getUserDB = function(username, cb) {
  User.findOne({ username: username})
   .exec(function(err, user) {
     if (err) { cb(err); }
     cb(null, user);
   });
};
 
exports.createUserDB = function(user, cb) {
  User.create(user, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
}; 

exports.signUpUser = function (req, res) {
  console.log('called signUpUser in handler');
  var username = req.body.username;
  var password = req.body.password;

  exports.getUserDB(username, function(err, user) {
    console.log('user.getUser returned with ', user);
    if (err) { console.error(err); }
    if (!user) {
      exports.createUserDB({username: username, password: password}, function(err, user) {
        res.send('user created');
      });
    } else {
      res.status(401).send('Username already exists');
    }
  });
};

exports.getUser = function (req, res) {
  console.log('called getUser in handler');
  exports.getUserDB(req.query.username, function(err, user) {
    if (err) { console.error(err); }
    res.status(200).send(user);
  });
};

exports.updateUser = function (req, res) {
  User.findOneAndUpdate({username: req.body.username}, {$set: req.body}, function() {
    res.send(204);
  });
};