Template.index.helpers({
	objList: function(){
		console.log('objList is called');
		return Objects.find();
	}
});