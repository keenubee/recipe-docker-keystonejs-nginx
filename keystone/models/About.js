var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * About Model
 * ==========
 */

var About = new keystone.List('About', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true }
});

About.add({
	section: { type: Types.Html, wysiwyg: true },
	title: { type: Types.Html, wysiwyg: true },
	clientDescription: { type: Types.Html, wysiwyg: true },
	logo: { type: Types.CloudinaryImage },
	key: {type: String, noedit: true}
});

About.defaultColumns = 'title';
About.register();

