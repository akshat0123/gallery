var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('entry', { title: 'Gallery' });
});

router.get('/main', function(req, res, next) {
	res.render('main');
});

router.get('/about', function(req, res, next) {
	res.render('about');
});

router.get('/contact', function(req, res, next) {
	res.render('contact');
});

module.exports = router;
