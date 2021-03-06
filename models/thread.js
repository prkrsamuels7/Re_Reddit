const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  text: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  userName: String,
  userAvatar: String,
  likes: { type: Number },
},
 { timestamps: true }
);


const threadSchema = new Schema({
  title: { type: String, required: true },
  text: {type: String, required: true},
  topic: { type: Schema.Types.ObjectId, ref: 'Topic' },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  userName: String,
  userAvatar: String,
  comments: [commentSchema],
  likes: { type: Number }
}, 
  { timestamps: true }
);

module.exports = mongoose.model('Thread', threadSchema)