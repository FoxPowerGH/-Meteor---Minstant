  ///
  // helper functions 
  /// 
  Template.available_user_list.helpers({
    users:function(){
      console.log("available user list");
      return Meteor.users.find();
    }
  })
 Template.available_user.helpers({
    getUsername:function(userId){

      user = Meteor.users.findOne({_id:userId});

      return user.profile.username;
    }, 
    isMyUser:function(userId){
      if (userId == Meteor.userId()){
        return true;
      }
      else {
        return false;
      }
    }
  })


  Template.chat_page.helpers({
    messages:function(){
      var chat = Chats.findOne({_id:Session.get("chatId")});
      return chat.messages;
    }, 
    other_user:function(){
      return ""
    }, 
    selectEmoticonCallback: function(val){
        console.log(val);
        var callback = function(val){
            console.log( " val from callback : " + val);
            $('#textAreaNewChat').val($('#textAreaNewChat').val() + " " + val);
        };
        return callback;
    }

  })
 
 
