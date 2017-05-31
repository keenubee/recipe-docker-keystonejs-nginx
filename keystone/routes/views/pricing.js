/**
 * Created by Lenovo on 15.05.2017.
 */
var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.section = 'pricing';
	locals.info_blocks = [];
	locals.data = {};

	// Load the current post

	view.on('init', function (next) {
		var q = keystone.list('Questions').model.find();
		q.exec(function (err, result) {
			locals.data = result;
			next(err);
		});
	});

	// Load the current post

	function getInfoBlock (key, next) {
		var q = keystone.list('Pricing').model.findOne({
			key: key
		});
		q.exec(function (err, result) {
			locals.info_blocks.push(result);
			next(err);
		});
	}

	view.on('init', function (next) {
		getInfoBlock('price', next)
	});
	view.on('init', function (next) {
		getInfoBlock('price1', next)
	});
	view.on('init', function (next) {
		getInfoBlock('price2', next)
	});
	view.on('init', function (next) {
		getInfoBlock('price3', next)
	});
	view.on('init', function (next) {
		getInfoBlock('price4', next)
	});
	view.on('init', function (next) {
		getInfoBlock('bestClients', next)
	});
	view.on('init', function (next) {
		getInfoBlock('feedback', next)
	});
	// locals.section is used to set the currently selected
	// item in the header navigation.
	

	// Render the view
	view.render('pricing');
};

