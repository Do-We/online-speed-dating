var express = require('express');
var router = express.Router();
var userHandler = require('../handlers/userHandler.js');
// var jwt = require('jsonwebtoken');

router.route('/login')
.post(userHandler.loginUser);

router.route('/signup')
.post(userHandler.signUpUser);

module.exports = router; 




// var passport = require('passport');
// var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;
// router.post('/authorize', ensureLoggedIn({ redirectTo: '/login', setReturnTo: false }), function(req, res) {
//   console.log('user was authorized', req.user);
//   res.send(req.user);
// });



