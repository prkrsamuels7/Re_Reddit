require('dotenv').config();

require('./config/database');

const Topic = require('./models/topic');

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

seedTopics();