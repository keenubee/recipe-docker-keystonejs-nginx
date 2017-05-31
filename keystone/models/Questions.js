var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Questions Model
 * ==========
 */

var Questions = new keystone.List('Questions', {
		map: { question: 'title' },
	}
);

Questions.add({
	
	question: { type: Types.Html, wysiwyg: true, height: 100,},
	answer: {type: Types.Html, wysiwyg: true, height: 400},

});

Questions.defaultColumns = 'question, answer';
Questions.register();

