var router = require('express').Router();
var activeEventHandler = require('../handlers/activeEventHandler.js');

router.post('/start', activeEventHandler.initiateEvent);
router.post('/setup', activeEventHandler.setupEvent);


module.exports = router; 