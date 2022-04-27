var express = require('express');
var router = express.Router();

const userCtrl = require('../controllers/users');

router.get('/:id', userCtrl.show);

module.exports = router;