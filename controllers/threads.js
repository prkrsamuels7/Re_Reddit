const Thread = require('../models/thread');
const Topic = require('../models/topic');

module.exports = {
  new: newThread,
  create,
  show,
}



function show(req, res) {
  Thread.findById(req.params.id, (err, thread) => {
    console.log(thread.userName)
    console.log(thread.comments);
    res.render(`threads/show`, { thread })
  })
}

function create(req, res) {
  Topic.findById(req.params.id, (err, topic) => {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    req.body.topic = topic;
    Thread.create(req.body);
    res.redirect(`/topics/${req.params.id}`);
  })
}

function newThread(req, res) {
  Topic.findById(req.params.id, (err, topic) => {
    res.render('threads/new', { topic })
  })
}