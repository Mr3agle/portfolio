const express = require('express');
const router = express.Router();
const Post = require('../../app_server/models/Post_model');

// POST Routes 
router.post('/post', async (req, res) => {
   const post = new Post({
      title: req.body.title,
      description: req.body.description
   });

   try {
      const postSaved = await post.save();
      res.json(postSaved);
   } catch (error) {
      res.json({
         message: error
      });
   }
});
// PATCH Routes 
// DELETE Routes 
// GET Routes 
router.get('/post', async (req, res) => {
   try {
      const posts = await Post.find();
      res.json(posts);
   } catch (error) {
      res.json({
         message: error
      });
   }
});

module.exports = router;