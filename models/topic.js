const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const topicSchema = new Schema({
  title: { type: String, required: true },
  threads: [{type: Schema.Types.ObjectId, ref: 'Thread'}]
},
 { timestamps: true }
)

module.exports = mongoose.model('Topic', topicSchema);