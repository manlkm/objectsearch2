Router.configure({
  layoutTemplate: 'layout'
});

/*Router.route('/item/:_id', function () {
  this.render('ItemShow');
 }, {name: 'item.show'
});*/
//Router.route('/item/:_id', {name: 'item.show'});
//Router.route('/item2', {name: 'obj.show'});

Router.map(function() {
	this.route('index', {path: '/'});
	//this.route('item');
	this.route('item.show', {path: '/item/:_id'});
});