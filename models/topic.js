const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const topicSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  // authorId: {type: Schema.Types.ObjectId, ref: 'User'},
  // possibly array of thread Ids
}, {
  timestamps: true
})

module.exports = mongoose.model('Movie', topicSchema);