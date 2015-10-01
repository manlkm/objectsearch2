Template.objectAdd.helpers({
  locationOptions: function () {
    return Locations.find({}, {sort:{name:1} }).map(function (c) {
      return {label: c.name, value: c._id};
    });
  }
});

Template.objectShow.helpers({
  object: function () {
    return Objects.findOne({_id: Router.current().params._id});
  }
});

Template.objectEdit.helpers({
  object: function () {
    var template = Template.instance();
    return Objects.findOne({_id: template.data.id});
  },
  locationOptions: function () {
    return Locations.find({}, {sort:{name:1} }).map(function (c) {
      return {label: c.name, value: c._id};
    });
  }
});

AutoForm.hooks({
  'object-new-form': {
    onSuccess: function (operation, result, template) {
      IonModal.close();
      IonKeyboard.close();
      Router.go('index', {_id: result});
    }
  }
});

AutoForm.hooks({
  'object-edit-form': {
    onSuccess: function (operation, result, template) {
      IonModal.close();
    },

    onError: function(operation, error, template) {
      alert(error);
    }
  }
});