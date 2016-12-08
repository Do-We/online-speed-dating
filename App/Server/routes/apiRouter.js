var router = require('express').Router();
var userHandler = require('../handlers/userHandler.js');

router.post('/user', userHandler.signUpUser);
router.get('/user', userHandler.getUser);
router.put('/user', userHandler.updateUser);

module.exports = router; 