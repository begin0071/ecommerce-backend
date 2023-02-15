
const { Tag } = require('../models');




const tagData = [
  {
    tag_name: 'Deer',
  },
  {
    tag_name: 'Loom',
  },
  {
    tag_name: 'Bshake',
  },
  {
    tag_name: 'Golden',
  },
  {
    tag_name: 'Bronco',
  },
  {
    tag_name: 'Green',
  },
  {
    tag_name: 'Numbers',
  },
  {
    tag_name: 'Hip Hop',
  },
];





const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;