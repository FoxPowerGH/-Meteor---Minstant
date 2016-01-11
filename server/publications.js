Avatar.setOptions({
    imageSizes: {
        'large': 80,
        'mySize': 50,
        'extra-small': 32
    },
    customImageProperty: function(){
        var user = this;
        console.log("Avatar Server:  "+user.profile)

        if (user && user.profile && user.profile.avatar)
        {
            return "/"+ user.profile.avatar;
        }
        return null;
    },
    fallbackType: "initials",
});


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