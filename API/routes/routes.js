const express = require('express');
const router = express.Router();
const Post = require('../../app_server/models/Post_model');

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
// POST Routes
router.post('/post', async (req, res) => {
	const post = new Post({
		title: req.body.title,
		description: req.body.description
	});

	try {
		const postSaved = await post.save();
		response(res, 201, postSaved);
	} catch (error) {
		res.status(400);
		error_handler(res);
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
		res.status(200).json(postUpdated);
	} catch (error) {
		res.status(400);
		error_handler(res);
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
		res.status(400);
		error_handler(res);
	}
});

// GET Routes
router.get('/post', async (req, res) => {
	try {
		const posts = await Post.find();
		res.json(posts);
	} catch (error) {
		res.status(400);
		error_handler(res);
	}
});

router.get('/post/:id', async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		res.status(302).json(post);
	} catch (error) {
		res.status(404);
		error_handler(res);
	}
});

module.exports = router;