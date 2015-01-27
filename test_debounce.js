if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);
  items=new Mongo.Collection(null)
  items.insert({pos:1})
  items.insert({pos:2})
  Template.body.helpers({
    item1: function () {
      return items.findOne({pos:1})
    },
    item2: function () {
      return items.findOne({pos:2})
    }
  });

  Template.item.events({
    'keyup input': _.debounce(function () {
      alert(this._id)

    },3000)
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
