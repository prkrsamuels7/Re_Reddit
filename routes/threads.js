var express = require('express');
var router = express.Router();

const threadsCtrl = require('../controllers/threads');

// GET /topics/:id/threads/new (new functionallity)
router.get('/topics/:id/threads/new', threadsCtrl.new);

// POST /topics/:id/threads (create functionallity)
router.post('/topics/:id/threads', threadsCtrl.create);

// GET /threads/:id (show functionallity)
router.get('/threads/:id', threadsCtrl.show);

module.exports = router;