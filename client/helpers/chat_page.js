Template.chat_page.events({
  // this event fires when the user sends a message on the chat page
  'submit .js-send-chat':function(event){

    sendChat(event);
    // stop the form from triggering a page reload
    event.preventDefault();

    // see if we can find a chat object in the database
    // to which we'll add the message
    //var msgs = [];
   },

  'keyup #textAreaNewChat': function(event){

        if (event.keyCode == 13 && !event.ctrlKey) {
            console.log(event.keyCode)
            sendChat(event);
            event.preventDefault();
        }else if (event.keyCode == 13 && event.ctrlKey){
            $(this).val(function(i,val){
                return val + "\n";
            });
        }
    }

});


function sendChat(event){
    var chat = Chats.findOne({_id:Session.get("chatId")});
    if (chat){// ok - we have a chat to use
      var msgs = chat.messages; // pull the messages property

      if (!msgs){// no messages yet, create a new array
        msgs = [];
        console.log(" no chat messages yet")
      }
      // is a good idea to insert data straight from the form
      // (i.e. the user) into the database?? certainly not. 
      // push adds the message to the end of the array
      var messageTxt = $('#textAreaNewChat').val();

      msgs.push({text: messageTxt, sentBy: Meteor.user()._id, timeStamp: new Date().toUTCString()});

      // reset the form
      $('#textAreaNewChat').val("");
      //event.target.chat.value = "";
      
      // put the messages array onto the chat object
      chat.messages = msgs;
      
      // update the chat object in the database.    
      Meteor.call("addChatMessage", msgs, chat._id);
    }
}