Meteor.methods({
    addChatMessage: function (messages, currentChatId) {
        var chat = Chats.findOne({_id:currentChatId});
        chat.messages = messages;
        chat.updated = new Date();
        // update the chat object in the database.
        Chats.upsert({"_id": chat._id}, chat);
        console.log("Meteor Call UPDATE ChatMessage")
        return chat.messages;    
    },

    createNewChatId: function(secondId){
        var chatId = Chats.insert({user1Id:Meteor.userId(), user2Id:secondId});
        console.log( "chat id : " + chatId);
        return chatId;
    },
});
