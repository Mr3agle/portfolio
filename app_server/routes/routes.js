const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');
const aboutController = require('../controllers/aboutController');
const projectsController = require('../controllers/projectsController');
const labController = require('../controllers/labController');

/* GET home page. */
router.get('/', indexController.index);
router.get('/projects/all', projectsController.getContent);

router.get('/projects/new-post', projectsController.newContent);
router.post('/projects/new-post', projectsController.postContent);

router.get('/projects/show/:id', projectsController.getById);
router.get('/projects/illustrations', projectsController.getIllustrations);
router.get('/projects/web-development', projectsController.getWeb);
router.get('/projects/3D-modeling', projectsController.getModeling);
router.get('/projects/photo', projectsController.getPhoto);
router.get('/projects/motion-graphics', projectsController.getMotion);
router.get('/projects/apps', projectsController.getApps);
router.get('/projects/audiotracks', projectsController.getAudio);
router.get('/about', aboutController.index);
router.get('/lab', labController.index);

module.exports = router;