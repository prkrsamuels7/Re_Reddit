var express = require('express');
var router = express.Router();

const commentCtrl = require('../controllers/comments');


//POST /threads/:id/comments (create functionality)
router.post('/threads/:id/comments', commentCtrl.create);

//DELETE /comments/:id (delete functionality)
router.delete('/comments/:id', commentCtrl.delete);

// EDIT /comments/:id/edit (edit functionality)
router.get('/comments/:id/edit', commentCtrl.edit);

//POST /comments/:id (update functionality)
router.put('/comments/:id', commentCtrl.update);


module.exports = router;