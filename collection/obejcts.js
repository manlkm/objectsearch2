Locations = new Mongo.Collection("locations");
Locations.attachSchema(new SimpleSchema({
	name:{
		type: String,
		label: "Name",
		max: 100
	},
	remark:{
		type: String,
		label: 'Remarks',
		optional: true
	}
}));

Objects = new Mongo.Collection("objects");
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
		type: Date,
		defaultValue: new Date(),
		autoform: { label: false }
	},
	remark:{
		type: String,
		label: 'Remarks',
		optional: true,
		autoform: {
	      'label-type': 'floating',
	      placeholder: 'Remarks',
	      rows: 6
	    }
	}/*,
	location:{
		type: String,
		label: 'Location'
	}*/
}));