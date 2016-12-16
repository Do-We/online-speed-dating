var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var userHandler = require('./handlers/userHandler.js');
var User = require('../Database/models/userModel.js');
//////// new encryption schema starts here ////////
var FbUser = require('../Database/models/fbUserModel.js');
//////// new encryption schema ends here ////////


// SEVDA
// TODO: need to add jwt in the middleware file

module.exports = function(app, express) {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: false}));
  app.use(bodyParser.json());
  app.use(express.static(path.join(__dirname, '../Client')));
  app.get('/dist/main.js', function(req, res) {
    console.log('called');
    res.sendFile(path.join(__dirname, '../../compiled/transpiled/main.js'));
  });

};

  

// SEVDA
/**** NOTE: moved all passport stuff in comment below ****/

// var passport = require('passport');
// var session = require('express-session');
// var LocalStrategy = require('passport-local').Strategy;
// var facebookStrategy = require('passport-facebook').Strategy;

// var sessionOptions = { 
//   secret: 'keyboard cat',
//   saveUninitialized: true,
//   resave: false
// };
  // app.use(session(sessionOptions));
  // app.use(passport.initialize());
  // app.use(passport.session());

  // passport.serializeUser(function(user, done) {
  //   done(null, user._id);
  // });

  // passport.deserializeUser(function(id, done) {
  //   User.findById(id, function (err, user) {
  //     done(err, user);
  //   });
  // }); 
  
  // passport.use(new LocalStrategy(
  //   function(username, password, done) {
  //     userHandler.getUserDB(username, function(err, user) {
  //       if (err) { return done(err); }
  //       if (!user) {
  //         console.log('failed username');
  //         return done(null, false, { message: 'Incorrect username.' });
  //       }
  //       if (password !== user.password) {
  //         console.log('failed password');
  //         return done(null, false, { message: 'Incorrect password.' });
  //       } 
  //       console.log('success');
  //       return done(null, user);
  //     }); 
  //   }
  // )); 

