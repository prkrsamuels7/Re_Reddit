var express = require('express');
var router = express.Router();

const topicsCtrl = require('../controllers/topics')

// GET /topics (index functionality)
router.get('/', topicsCtrl.index)
// GET /topics/:id (show functionality)
router.get('/:id', topicsCtrl.show);

module.exports = router;