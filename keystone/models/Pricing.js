var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Pricing Model
 * ==========
 */

var Pricing = new keystone.List('Pricing', {
		map: { name: 'title' },
	}
);

Pricing.add({
	title: { type: Types.Html, wysiwyg: true},
	text: {type: Types.Html, wysiwyg: true, height: 400},
	price: {type: Types.Html, wysiwyg: true, height: 100},
	key: {type: String, noedit: true},

});

Pricing.defaultColumns = 'title, text, price';
Pricing.register();

