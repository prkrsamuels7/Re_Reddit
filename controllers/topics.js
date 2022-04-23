const Topic = require('../models/topic');

module.exports = {
  index,
}

function index(req, res) {
  Topic.find({}, function(err, topics) {
    res.render('topics/index', { topics })
  })
}