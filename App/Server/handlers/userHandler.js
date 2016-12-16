var userModel = require('../../Database/models/userModel.js');
var db = require('../../Database/config.js');
var User = require('../../Database/models/userModel.js');

var jwt = require('jsonwebtoken');
var _ = require('underscore');

// HELPER DB FUNCTIONS
exports.getUserDB = function (username) {
  User.findOne({username: username})
   .exec(function(err, user) {
     if (err) { cb(err, null); }
     cb(null, user);
   });
};

exports.createUserDB = function(user, cb) {
  User.create(user, function (err, user) {
    if (err) { return cb(err, user); }
    console.log('password after', user.password, user.salt)

    cb(null, user);
  });
};

 // REQUEST HANDLER FUNCTIONS
exports.signUpUser = function (req, res) {
  var username = req.body.username;
  var password = req.body.password;
  var age = req.body.age;
  var gender = req.body.gender;
  var location = req.body.location;
  var interestedIn = req.body.interestedIn;

  console.log('REQ.BODY', req.body)
  User.findOne({username: username}).exec(function(err, user) {
    console.log('user', user)
    if (err) { return res.status(400).send('getUserDB ERR'); }
    if (!user) {
      var newUser =  new User ({
        username: username, 
        password: password,
        age: age,
        gender: gender,
        location: location,
        interestedIn: interestedIn
      })
      newUser.save(function(err, user) {
        if (err) { return res.status(400).send('getUserDB Bad Request');}
        console.log("SIGNUP SUCCESFUL - USER DATA: ", user);
        res.status(201).send({
          id_token: jwt.sign(user, "cream on chrome!")
        });
      });
    } else {
      res.status(401).send('Username already exists');
    }
  });
};

//TODO: need to add bcrypt auth and replace code below
// if(password === user.password) {
//   console.log('MATCH', user)
exports.loginUser = function(req, res) {
  console.log('LOGIN - USER DATA', req.body, req.url)
  console.log('req.path',  req.path)
  var username = req.body.username;
  var password = req.body.password; 

  User.findOne({username: username}).exec(function(err, user) {
    console.log("user", username)
    if(err) { return res.status(400).send('getUserDB Bad Request'); }
    if(!user) { return res.sendStatus(401); }
    res.status(201).send({
      id_token: jwt.sign(user, "cream on chrome!")
    });
  })

};


// TODO:
exports.logoutUser = function(req, res) {
  // req.logout();
  res.status(200).send('logged out');
}

exports.updateUser = function (req, res) {
  User.findOneAndUpdate(
    {username: req.body.username}, 
    {$set: req.body}, function() {
    res.send(204);
  });
};

exports.updateInterests = function (req, res) {
  console.log('req.bdoy', req.body)
  User.findOneAndUpdate({username: req.body.username}, {$set: req.body}, function() {
    res.send(204);
  });
};

exports.updatePersonal = function (req, res) {
  console.log('req.bdoy', req.body)
  User.findOneAndUpdate({username: req.body.username}, {$set: req.body}, function() {
    res.send(204);
  });
};




// I'm not sure if this function is ever being used...
exports.getUser = function (req, res) {
  exports.getUserDB(req.query.username, function(err, user) {
    if (err) { return res.status(400).send('GET USER Bad Request')}
    res.status(200).send(user);
  });
};
