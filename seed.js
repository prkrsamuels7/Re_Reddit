require('dotenv').config();

require('./config/database');

const Topic = require('./models/topic');
const Thread = require('./models/thread');

let topics = [
  {title: 'Coding'},
  {title: 'Sports'},
  {title: 'Gaming'},
  {title: 'DIY'},
  {title: 'Fitness'},
  {title: 'Technology'},
  {title: 'World News'},
  {title: 'Cryptocurrency'}
]


async function seedTopics() {
  let emptyTopics = await Topic.deleteMany({});
  let seededTopics = await Topic.create(topics);
  console.log(emptyTopics);
  console.log(seededTopics);
}

async function deleteThreads() {
  let emptyThreads = await Thread.deleteMany({});
  console.log(emptyThreads);
}

// deleteThreads();

// seedTopics();