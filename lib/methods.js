Meteor.methods({
    addChatMessage: function (messages, currentChatId) {
        var chat = Chats.findOne({_id:currentChatId});
        chat.messages = messages;
        chat.updated = new Date();
        // update the chat object in the database.
        Chats.update({"_id": chat._id}, chat);
        console.log("Meteor Call UPDATE ChatMessage")
        return chat.messages;    
    }
});
