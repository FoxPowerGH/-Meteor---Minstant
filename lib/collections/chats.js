Chats = new Mongo.Collection("chats");

/* set up security on Collection
Chats.allow({

	update:function(userId, doc){
		console.log("testing security on Chats Update");
		if (Meteor.user()){// they are logged in
			return true;
		} else {// user not logged in - do not let them update. 
			return false;
		}
	},

  	insert: function (userId, doc) {
		console.log("testing security on Chats Insert");
		if (Meteor.user()){// they are logged in
		  return true;
	    } 
	    else {
	      return false;
	    }
	  }
}); */