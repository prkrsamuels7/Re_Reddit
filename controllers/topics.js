const Topic = require('../models/topic');
const Thread = require('../models/thread');

module.exports = {
  index,
  show,
}

function show(req, res) {
  Topic.findById(req.params.id, (err, topic) => {
    Thread.find({ topic: topic._id }, (err, threads) => {
      res.render('topics/show', { topic, threads })
    })
  })
}

function index(req, res) {
  Topic.find({}, (err, topics) => {
    res.render('topics/index', { topics })
  })
}