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
   category: {
      type: String,
      required: true
   },
   image: {
      type: String,
      required: true
   },
   link: {
      type: String
   }
}, {
   timestamps: true
});

module.exports = mongoose.model('Posts', PostSchema);