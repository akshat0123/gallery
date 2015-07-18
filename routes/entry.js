var cloudinary = require('cloudinary');
var fs = require('fs');
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('entry', { title: 'Gallery' });
});

router.get('/main', function(req, res, next) {

	cloudinary.api.resources(function(items) {
		res.render('main', { images : items.resources, cloudinary : cloudinary });
	});

//	res.render('main');

});

router.get('/about', function(req, res, next) {
	res.render('about');
});

router.get('/contact', function(req, res, next) {
	res.render('contact');
});

module.exports = router;
