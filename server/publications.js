


Meteor.publish('chats', function(){
  return Chats.find({});
});

Meteor.publish("users", function(){
    return Meteor.users.find();
});

Meteor.publish("userStatus", function() {
  //  console.log("PUBLISHING METEOR USERS STATUS");
    return Meteor.users.find({ "status.online": true });
});