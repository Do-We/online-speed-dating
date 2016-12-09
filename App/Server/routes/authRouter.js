var router = require('express').Router();
var userHandler = require('../handlers/userHandler.js');
var passport = require('passport');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn;

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.status(200).json(req.user);
});
router.post('/authorize', ensureLoggedIn({ redirectTo: '/error', setReturnTo: false }), function(req, res) {
  console.log('user was authorized');
  res.send(req.user);
});
router.get('/logout', function(req, res) {
  req.logout();
  res.status(200).send('logged out');
});


module.exports = router; 