Chats = new Mongo.Collection("chats");

// set up security on Collection
Chats.allow({
  insert: function (userId, doc) {
    if (userId) {
      return true;
    } else {
      return false;
    }
  },
});