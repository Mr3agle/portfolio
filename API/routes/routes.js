const express = require('express');
const apiController = require('../controller/api_controller');
const router = express.Router();

// POST Routes
router.post('/post', apiController.postContent);
// PATCH Routes
router.patch('/post/:id', apiController.updtadeContent);
// DELETE Routes
router.delete('/post/:id', apiController.deleteContent);
// GET Routes
router.get('/post', apiController.getContent);
router.get('/post/:id', apiController.getById);

module.exports = router;