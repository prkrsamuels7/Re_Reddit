const Thread = require('../models/thread');
const Topic = require('../models/topic');

module.exports = {
  new: newThread,
  create,
  show,
}

function show(req, res) {
  Thread.findById(req.params.id, (err, thread) => {
    res.render(`threads/show`, { thread })
  })
}

function create(req, res) {
  req.body.topic = req.params.id;
  Thread.create(req.body, function(err, thread) {
    res.redirect(`/topics/${req.params.id}`);
  })
}

function newThread(req, res) {
  Topic.findById(req.params.id, (err, topic) => {
    res.render('threads/new', { topic })
  })
}