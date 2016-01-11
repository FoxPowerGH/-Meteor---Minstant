Template.chat_message.helpers({

    getUser:function(sentBy) 
    {
      user = Meteor.users.findOne({_id:sentBy});
      if (user){
        return user.profile.username;
      }
      else {
        console.log("Anonymous")
        return "Anonymous";
      }
    },

    localTime: function(date) {
      if (date) {
        return moment(date).format('llll');
      }
    },

    getUserById: function (sentBy) {
      return Meteor.users.findOne({
        _id: sentBy
      }).profile.username;
    },

    messageBackgroundClass: function (sentBy) {
      if (sentBy == Meteor.userId()) {
        return "bg-success";
      } else {
        return "bg-info";
      }
    },

    user: function(){
        var chatMessage = Template.currentData();
        var user = Meteor.users.findOne({"_id":chatMessage.userId});
        return user;
    },

    isCurrentUser: function(){
        var chatMessage = Template.currentData();
        var user = Meteor.users.findOne({"_id":chatMessage.userId});
        var currentUser = Meteor.user();
        if (user && currentUser) {
            return user._id == currentUser._id;
        }
        return null;
    },

    isSecondUser: function(){
        var chatMessage = Template.currentData();
        var user = Meteor.users.findOne({"_id":chatMessage.userId});
        var currentUser = Meteor.user();
        if (user && currentUser)
        {
            return user._id != currentUser._id;
        }
        return null;
    }
  });