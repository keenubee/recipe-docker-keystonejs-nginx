var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Home Model
 * ==========
 */

var Home = new keystone.List('Home', {
	map: { name: 'title' },
	}
	);

Home.add({
	title: { type: Types.Html, wysiwyg: true},
	briefText: {type: Types.Html, wysiwyg: true, height: 200},
	fullText: {type: Types.Html, wysiwyg: true, height: 400},
	image: { type: Types.CloudinaryImage },
	imageActive: { type: Types.CloudinaryImage },
	key: {type: String, noedit: true},

});

Home.defaultColumns = 'title, briefText';
Home.register();
