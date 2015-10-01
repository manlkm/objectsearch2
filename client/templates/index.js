Template.layout.rendered = function () {
  Session.set('currentTab', 'objects');
};

Template.index.helpers({
	objList: function(){
		console.log('objList is called');
		return Objects.find({}, {sort:{createTs:-1} });
	}
});

Template.registerHelper('formatDate', function(date) {
  return moment(date).format('YYYY-MM-DD');
});