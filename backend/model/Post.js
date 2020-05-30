const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Post = new Schema({
  post_title: {
    type: String
  },
  post_description: {
    type: String
  }
}, {
  collection: 'posts'
})

module.exports = mongoose.model('Posts', Post)