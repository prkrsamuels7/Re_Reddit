const Thread = require('../models/thread');

module.exports = {
  create,
  delete: deleteComment,
  edit,
  update,
};

async function update(req, res) {
  const thread = await Thread.findOne({'comments._id': req.params.id});
  const comment = thread.comments.id(req.params.id);
  if(!comment.user.equals(req.user._id)) return res.redirect(`/threads/${thread._id}`);
  comment.text = req.body.text;
  thread.save((err) => {
    res.redirect(`/threads/${thread._id}`);
  });
};

async function edit(req, res) {
  const thread = await Thread.findOne({'comments._id': req.params.id})
  const comment = thread.comments.id(req.params.id);
  res.render('comments/edit', {comment});
};

async function deleteComment(req, res, next) {
  const thread = await Thread.findOne({ 'comments._id': req.params.id, 'comments.user': req.user.id });
  thread.comments.remove(req.params.id);
  await thread.save();
  res.redirect(`/threads/${thread._id}`);
};

function create(req, res) {
  Thread.findById(req.params.id, (err, thread) => {
    req.body.user = req.user._id;
    req.body.userName = req.user.name;
    req.body.userAvatar = req.user.avatar;
    thread.comments.push(req.body);
    thread.save((err) => {
      res.redirect(`/threads/${req.params.id}`);
    });
  });
};