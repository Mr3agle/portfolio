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
router.patch('/post/:id', async (req, res) => {
   try {
      const postUpdated = await Post.updateOne({
         _id: req.params.id
      }, {
         $set: {
            title: req.body.title,
            description: req.body.description
         }
      });
      res.json(postUpdated);
   } catch (error) {
      res.json({
         message: error
      });
   }
});
// DELETE Routes 
router.delete('/post/:id', async (req, res) => {
   try {
      const postRemoved = await Post.remove({
         _id: req.params.id
      });
      res.json(postRemoved);
   } catch (error) {
      res.json({
         message: error
      });
   }
});

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

router.get('/post/:id', async (req, res) => {
   try {
      const post = await Post.findById(req.params.id);
      res.json(post);
   } catch (error) {
      res.json({
         message: error
      });
   }
});

module.exports = router;