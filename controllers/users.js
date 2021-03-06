const User = require('../models/user');
const Thread = require('../models/thread');

module.exports = {
  show,
}

async function show(req, res) {
  const user = await User.findById(req.params.id);
  const threads = await Thread.find({user: req.user._id}).sort('topic -createdAt');
  const userCommentedThreads = await Thread.find({'comments.user': req.user._id});
  const comments = [];
  userCommentedThreads.forEach((thread) => {
    thread.comments.forEach((comment) => {
      if (comment.user.equals(req.params.id)){
        comments.push(comment);
      }
    })
  })
  res.render('users/show', {user, threads, comments});
}