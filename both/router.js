Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
	this.route('index', {path: '/'});
	this.route('locations', {path: 'locations'});
	this.route('object.show', {path: '/object/:_id'});
});