var express = require('express');
var router = express.Router();

const commentCtrl = require('../controllers/comments');


//POST /threads/:id/comments (create functionality)
router.post('/threads/:id/comments', commentCtrl.create);


module.exports = router;