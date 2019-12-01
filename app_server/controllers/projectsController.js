const Post = require('../models/Post_model');

module.exports.index = (req, res) => {
   res.render('projects');
};

module.exports.postContent = async (req, res) => {
   const post = new Post(req.body);
   try {
      await post.save();
      res.status(200).render('post', {
         message: "Post publicado con éxito",
         post
      });
   } catch (error) {
      res.status(400).json(error);
   }
}
module.exports.newContent = async (req, res) => {
   res.status(200).render("post", {
      message: ""
   });
}

module.exports.getIllustrations = (req, res) => {
   res.render('projects', {
      title: 'Projects',
      mainTitle: 'PROJECTS',
   });
};

module.exports.getContent = async (req, res) => {
   try {
      const posts = await Post.find();
      res.render('projects', {
         title: 'Projects',
         mainTitle: 'PROJECTS',
         posts
      });
   } catch (error) {
      res.status(400);
      error_handler(res);
   }
}
module.exports.getIllustrations = async (req, res) => {
   try {
      const posts = await Post.find({
         category: 'illustration'
      });
      res.render('projects', {
         title: 'Projects',
         mainTitle: 'PROJECTS',
         posts: posts
      });
   } catch (error) {
      res.status(400);
      error_handler(res);
   }
}
module.exports.getWeb = async (req, res) => {
   try {
      const posts = await Post.find({
         category: 'web'
      });
      res.render('projects', {
         title: 'Projects',
         mainTitle: 'PROJECTS',
         posts: posts
      });
   } catch (error) {
      res.status(400);
      error_handler(res);
   }
}
module.exports.getModeling = async (req, res) => {
   try {
      const posts = await Post.find({
         category: '3D'
      });
      res.render('projects', {
         title: 'Projects',
         mainTitle: 'PROJECTS',
         posts: posts
      });
   } catch (error) {
      res.status(400);
      error_handler(res);
   }
}
module.exports.getPhoto = async (req, res) => {
   try {
      const posts = await Post.find({
         category: 'photo'
      });
      res.render('projects', {
         title: 'Projects',
         mainTitle: 'PROJECTS',
         posts: posts
      });
   } catch (error) {
      res.status(400);
      error_handler(res);
   }
}
module.exports.getMotion = async (req, res) => {
   try {
      const posts = await Post.find({
         category: 'motiongraphics'
      });
      res.render('projects', {
         title: 'Projects',
         mainTitle: 'PROJECTS',
         posts: posts
      });
   } catch (error) {
      res.status(400);
      error_handler(res);
   }
}
module.exports.getApps = async (req, res) => {
   try {
      const posts = await Post.find({
         category: 'apps'
      });
      res.render('projects', {
         title: 'Projects',
         mainTitle: 'PROJECTS',
         posts: posts
      });
   } catch (error) {
      res.status(400);
      error_handler(res);
   }
}
module.exports.getAudio = async (req, res) => {
   try {
      const posts = await Post.find({
         category: 'audio'
      });
      res.render('projects', {
         title: 'Projects',
         mainTitle: 'PROJECTS',
         posts: posts
      });
   } catch (error) {
      res.status(400);
      error_handler(res);
   }
}

module.exports.getById = async (req, res) => {
   try {
      const post = await Post.findById(req.params.id);
      res.status(302).render('project', {
         title: post.title,
         mainTitle: post.title,
         post
      })
   } catch (error) {
      res.status(404);
      error_handler(res);
   }
}