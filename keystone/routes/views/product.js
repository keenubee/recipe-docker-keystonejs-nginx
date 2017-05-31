var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	
	locals.main_promo = {};
	locals.info_blocks = [];
	locals.infogr = {};
	locals.footer_promo={};
	
	function getInfoBlock (key, next) {
		var q = keystone.list('Product').model.findOne({
			key: key
		});
		q.exec(function (err, result) {
			locals.info_blocks.push(result);
			next(err);
		});
	}
	
	// Load the current product data
	view.on('init', function (next) {
		var q = keystone.list('Product').model.findOne({
			key: 'main_promo'
		});
		q.exec(function (err, result) {

			locals.main_promo = result;
			next(err);
		});
	});

	view.on('init', function (next) {
		getInfoBlock('func1', next)
	});

	view.on('init', function (next) {
		getInfoBlock('func2', next)
	});

	view.on('init', function (next) {
		getInfoBlock('func3', next)
	});

	view.on('init', function (next) {
		getInfoBlock('func4', next)
	});

	view.on('init', function (next) {
		var q = keystone.list('Product').model.findOne({
			key: 'infogr'
		});
		q.exec(function (err, result) {

			locals.infogr = result;
			next(err);
		});
	});

	view.on('init', function (next) {
		var q = keystone.list('Product').model.findOne({
			key: 'footer_promo'
		});
		q.exec(function (err, result) {

			locals.footer_promo = result;
			next(err);
		});
	});
	

	locals.section = 'Product';

	// Render the view
	view.render('Product');
};
