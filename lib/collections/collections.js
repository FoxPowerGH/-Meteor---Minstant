/* Websites = new Mongo.Collection("websites");

WebsitesIndex = new EasySearch.Index({
  collection: Websites,
  limit:  20,
  fields: ['title', 'description'],
  engine: new EasySearch.MongoDB({
    sort: function() {
      return {'upvoting': -1};
    }
  })
});



// set up security on Collection
Websites.allow({

	// we need to be able to update Websites for ratings.
	update:function(userId, doc){
		console.log("testing security on Websites update");
		if (Meteor.user()){// they are logged in
			return true;
		} else {// user not logged in - do not let them update  (rate) the Websites. 
			return false;
		}
	},

	insert:function(userId, doc){
		console.log("testing security on Websites insert");
		if (Meteor.user()){// they are logged in
			if (userId != doc.createdBy){// the user is messing about
				console.log("Return false, no es el mismo que lo creo");
				return false;
			}
			else {// the user is logged in, the Websites has the correct user id
				return true;
				console.log("return true, esta logeado")
			}
		}
		else {// user not logged in
			return false;
			console.log("return false, no esta login")
		}
	}, 
	remove:function(userId, doc){
		return true;
	}
})
*/
