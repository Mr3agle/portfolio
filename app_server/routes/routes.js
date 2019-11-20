const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const aboutController = require('../controllers/aboutController');

/* GET home page. */
router.get('/', indexController.index);
router.get('/projects', indexController.projects);
router.get('/about', aboutController.index);
router.get('/lab', indexController.lab);

module.exports = router;