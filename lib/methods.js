Meteor.methods({
 'insert_website': function(url, title, description) {
    var currentUser = Meteor.userId();
    var user = Meteor.users.findOne({_id: currentUser});
    var username = user.username;
    var data = {
      url: url,
      title: title,
      description: description,
      createdBy: username,
      comments: 0,
      createdOn: new Date()
    };
    if(data.createdBy === username) {
      Websites.insert(data);
    }
  },
  'insert_comment': function(docId, comment) {
    var currentUser = Meteor.userId();
    var user = Meteor.users.findOne({_id: currentUser});
    var username = user.username;
    var data = {
      text: comment,
      createdBy: username,
      websiteId: docId,
      createdOn: new Date()
    };
    if(data.createdBy === username) {
      Comments.insert(data);
      Websites.update({_id: docId}, {$inc: {comments: 1}});
    }
  }

  /*,  upvoting
  'vote_website': function (website_id, vote) {
    currentUser = Meteor.userId();
    var selector = {};
    selector[vote] = 1;
    if (currentUser) {
      var query = {};
      query["_id"] = website_id;
      Websites.update(query, {$inc: selector});
    }
  } */
});
