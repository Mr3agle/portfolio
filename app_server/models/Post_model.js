const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
   title: {
      type: String,
      required: true
   },
   descriptionShort: {
      type: String,
      required: true
   },
   descriptionLong: {
      type: String,
      required: true
   },
   tags: [{
      type: String
   }]
}, {
   timestamps: true
});

module.exports = mongoose.model('Posts', PostSchema)