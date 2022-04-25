const Thread = require('../models/thread');

module.exports = {
  create,
}

function create(req, res) {
  Thread.findById(req.params.id, (err, thread) => {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    console.log(thread);
    console.log(req.body);
    thread.comments.push(req.body);
    thread.save((err) => {
      res.redirect(`/threads/${req.params.id}`);
    })
  })
}