var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/admin', function (req, res, next) {
  res.render('../auth/views/login.pug', {
    title: 'Admin',
    auth
  });
});

module.exports = router;