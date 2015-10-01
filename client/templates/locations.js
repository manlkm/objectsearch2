Template.locations.helpers({
	locList: function(){
		console.log('locList is called');
		return Locations.find();
	}
});