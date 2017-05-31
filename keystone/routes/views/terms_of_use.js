/**
 * Created by Lenovo on 15.05.2017.
 */
var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'terms_of_use';

	// Render the view
	view.render('terms_of_use');
};
