var express = require('express')
var router = express.Router();
var userHandler = require('../handlers/userHandler.js');
var eventHandler = require('../handlers/eventHandler.js');


router.route('/user')
.get(userHandler.getUser)
.put(userHandler.updateUser);

router.route('/user/events')
.get(eventHandler.getSingleEvent);

router.route('/events')
.get(eventHandler.getEvents)
.post(eventHandler.postEvent)
.put(eventHandler.updateEvent);

router.route('/userBasic')
.put(userHandler.updateUser);

router.route('/userInterests')
.put(userHandler.updateInterests);

router.route('/userPersonal')
.put(userHandler.updatePersonal);


module.exports = router; 




// var passport = require('passport');

