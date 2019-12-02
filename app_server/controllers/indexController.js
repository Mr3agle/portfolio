const Post = require('../models/Post_model');

module.exports.index = async (req, res) => {
   try {
      const posts = await Post.find().sort([
         ['updatedAt', 'descending']
      ]).limit(4);
      res.render('home', {
         title: 'Home',
         saluto1: 'HOLA!',
         saluto2: 'Soy un desarrollador',
         saluto3: 'contemporáneo!',
         projectsTitle: 'Últimos Proyectos',
         posts
      });
   } catch (error) {
      res.status(400).json(error);
   }
}

module.exports.projects = (req, res) => {
   res.render('projects', {
      title: 'Projects'
   });
};
module.exports.lab = (req, res) => {
   res.render('lab', {
      title: 'Lab'
   });
};