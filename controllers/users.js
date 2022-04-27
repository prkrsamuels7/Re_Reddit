const User = require('../models/user');
const Thread = require('../models/thread');

module.exports = {
  show,
}

async function show(req, res) {
  const user = await User.findById(req.params.id);
  const threads = await Thread.find({user: req.user.id}).sort('topic -createdAt');
  res.render('users/show', {user, threads});
}