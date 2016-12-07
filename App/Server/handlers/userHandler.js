var db = require('../../Database/config.js');
var User = require('../../Database/models/userModel.js');

exports.signUpUser = function (req, res) {
  var username = req.body.username;
  User.findOne({ username: username })
    .exec(function (err, user) {
      if (!user) {
        var newUser = new User({
          username: username
        });
        newUser.save();
        res.send('user created');
      } else {
        res.send(404, 'Username already exists');
      }
    });
};

exports.loginUser = function (req, res) {
  var username = req.query.username;
  User.findOne({ username: username })
    .exec(function (err, user) {
      if (!user) {
        res.status(404).send('Username does not exist');
      } else {
        res.status(200).send(user);
      }
    });
};