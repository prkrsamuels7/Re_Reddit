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
      // console.log(comment);
      console.log(comment.user);
      console.log(req.user.id);
      if (comment.user === req.params.id){
        console.log(comment);
        comments.push(comment);
      }
        
    })
  })
  // console.log(userCommentedThreads);
  console.log(comments);
  res.render('users/show', {user, threads, comments});
}