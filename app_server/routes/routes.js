const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const aboutController = require('../controllers/aboutController');
const projectsController = require('../controllers/projectsController');
const labController = require('../controllers/labController');

/* GET home page. */
router.get('/', indexController.index);
router.get('/projects/all', projectsController.index);
router.get('/projects/illustrations', projectsController.getIllustrations);
router.get('/projects/web-development', projectsController.getIllustrations);
router.get('/projects/3D-modeling', projectsController.getIllustrations);
router.get('/projects/photo', projectsController.getIllustrations);
router.get('/projects/motion-graphics', projectsController.getIllustrations);
router.get('/projects/apps', projectsController.getIllustrations);
router.get('/projects/audiotracks', projectsController.getIllustrations);
router.get('/about', aboutController.index);
router.get('/lab', labController.index);

module.exports = router;