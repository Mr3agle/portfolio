const Post = require('../../app_server/models/Post_model');

/****************** GET REQUESTS *****************************/
let getContent = async (req, res) => {
   try {
      const posts = await Post.find();
      res.json(posts);
   } catch (error) {
      res.status(400);
      error_handler(res);
   }
}

let getById = async (req, res) => {
   try {
      const post = await Post.findById(req.params.id);
      res.status(302).json(post);
   } catch (error) {
      res.status(404);
      error_handler(res);
   }
}

/****************** POST REQUESTS *****************************/
let postContent = async (req, res) => {
   const post = new Post({
      title: req.body.title,
      descriptionShort: req.body.descriptionShort,
      descriptionLong: req.body.descriptionLong,
      tags: req.body.tags
   });

   try {
      const postSaved = await post.save();
      response(res, 201, postSaved);
   } catch (error) {
      res.status(400);
      error_handler(res);
   }
}

/****************** PATCH REQUESTS *****************************/
let updtadeContent = async (req, res) => {
   try {
      const postUpdated = await Post.updateOne({
         _id: req.params.id
      }, {
         $set: {
            title: req.body.title,
            descriptionShort: req.body.descriptionShort,
            descriptionLong: req.body.descriptionLong,
            tags: req.body.tags
         }
      });
      res.status(200).json(postUpdated);
   } catch (error) {
      res.status(400);
      error_handler(res);
   }
}

/****************** DELETE REQUESTS ***************************/
let deleteContent = async (req, res) => {
   try {
      const postRemoved = await Post.remove({
         _id: req.params.id
      });
      res.json(postRemoved);
   } catch (error) {
      res.status(400);
      error_handler(res);
   }
}

/******************* HELPERS *****************************/
function response(res, status, post) {
   res.status(status).json(post);
}

function json_msg(res, msg) {
   res.json({
      message: msg
   });
}

function error_handler(res) {
   switch (res.statusCode) {
      case 404:
         json_msg(res, 'Content not found');
         break;
      case 400:
         json_msg(res, 'Bad Request');
         break;
      default:
         json_msg(res, 'Something went wrong');
         break;
   }
}

module.exports = {
   postContent,
   getContent,
   getById,
   deleteContent,
   updtadeContent
}