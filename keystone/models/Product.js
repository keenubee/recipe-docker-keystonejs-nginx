var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Post Model
 * ==========
 */

var Product = new keystone.List('Product', {
	map: { name: 'title' },
	autokey: { path: 'slug', from: 'title', unique: true },
});

Product.add({
	title: { type: Types.Html, wysiwyg: true },
	text: { type: Types.Html, wysiwyg: true },
	image: { type: Types.CloudinaryImage },
	key: {type: String, noedit: true}
});

Product.defaultColumns = 'title, text';
Product.register();
