Locations = new Mongo.Collection("locations");
Locations.attachSchema(new SimpleSchema({
	name:{
		type: String,
		label: "Name",
		max: 100,
		autoform: {
	      'label-type': 'floating',
	      placeholder: 'Name'
	    }
	},
	remark:{
		type: String,
		label: 'Remarks',
		optional: true,
		autoform: {
	      'label-type': 'floating',
	      placeholder: 'Remarks',
	      rows: 3
	    }
	}
}));

Objects = new Mongo.Collection("objects");

Objects.before.insert(function (userId, doc) {
  doc.createTs = new Date();
});

Objects.helpers({
  location: function() {
    return Locations.findOne(this.locationId);
  }
});

Objects.attachSchema(new SimpleSchema({
	name:{
		type: String,
		label: "Name",
		max: 100,
		autoform: {
	      'label-type': 'floating',
	      placeholder: 'Name'
	    }
	},
	createTs:{
		type: Date
	},
	remark:{
		type: String,
		label: 'Remarks',
		optional: true,
		autoform: {
	      'label-type': 'floating',
	      placeholder: 'Remarks',
	      rows: 4
	    }
	},
	locationId:{
		type: String,
		label: 'Location',
		autoform: {
	      'label-type': 'floating'	      
	    }
	}
}));