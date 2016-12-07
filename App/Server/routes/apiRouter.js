var router = require('express').Router();
var userHandler = require('../handlers/userHandler.js');

router.post('/user', userHandler.signUpUser);
router.get('/user', userHandler.loginUser);


module.exports = router; 