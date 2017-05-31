var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.info_blocks = [];
	
	locals.section = 'logo';
	
	// Load the current post
	
	function getInfoBlock (key, next) {
		var q = keystone.list('Home').model.findOne({
			key: key
		});
		q.exec(function (err, result) {
			locals.info_blocks.push(result);
			next(err);
		});
	}

	view.on('init', function (next) {
		getInfoBlock('main_promo', next)
	});
	
	view.on('init', function (next) {
		getInfoBlock('text_promo', next)
	});
	view.on('init', function (next) {
		getInfoBlock('icon_promo1', next)
	});
	view.on('init', function (next) {
		getInfoBlock('icon_promo2', next)
	});
	view.on('init', function (next) {
		getInfoBlock('icon_promo3', next)
	});
	view.on('init', function (next) {
		getInfoBlock('icon_promo4', next)
	});
	view.on('init', function (next) {
		getInfoBlock('functionality1', next)
	});
	view.on('init', function (next) {
		getInfoBlock('functionality2', next)
	});
	view.on('init', function (next) {
		getInfoBlock('functionality3', next)
	});
	view.on('init', function (next) {
		getInfoBlock('functionality4', next)
	});
	view.on('init', function (next) {
		getInfoBlock('whoisitfor', next)
	});
	view.on('init', function (next) {
		getInfoBlock('whoisitfor1', next)
	});
	view.on('init', function (next) {
		getInfoBlock('whoisitfor2', next)
	});
	view.on('init', function (next) {
		getInfoBlock('whoisitfor3', next)
	});
	view.on('init', function (next) {
		getInfoBlock('whoisitfor4', next)
	});
	view.on('init', function (next) {
		getInfoBlock('dashboard1', next)
	});
	view.on('init', function (next) {
		getInfoBlock('dashboard2', next)
	});
	view.on('init', function (next) {
		getInfoBlock('dashboard3', next)
	});
	view.on('init', function (next) {
		getInfoBlock('dashboard4', next)
	});
	view.on('init', function (next) {
		getInfoBlock('dashboard5', next)
	});
	view.on('init', function (next) {
		getInfoBlock('dashboard6', next)
	});
	view.on('init', function (next) {
		getInfoBlock('anyplace', next)
	});
	
	// locals.section is used to set the currently selected
	// item in the header navigation.
	

	// Render the view
	view.render('index');
	

};
