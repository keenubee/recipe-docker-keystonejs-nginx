/**
 * Created by Lenovo on 15.05.2017.
 */
var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	locals.clients = [];

	view.on('init', function (next) {
		var q = keystone.list('About').model.find();
		q.exec(function (err, result) {
			var filtredClients = result.filter(function (item) {
					return item.key != 'title'
				});
			
			
			var title = result.filter(function (item) {
				return item.key == 'title'
			});
			locals.header = title.pop();
			
			
			var intermediateArr = [];
			var count = 25;
			var cycleCount = Math.ceil(filtredClients.length/count);
			for (var i=0; i < cycleCount; i++){
				if ((i+1)*count > filtredClients.length){
					intermediateArr = filtredClients.slice(i*count);
					locals.clients.push(intermediateArr);
				}
				else {
					intermediateArr = filtredClients.slice(i*count, i*count + count);
					locals.clients.push(intermediateArr);
				}
			}
			next(err);
		});
	});
	
	locals.section = 'about';

	// Render the view
	view.render('about');
};
