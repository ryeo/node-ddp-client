Posts = new Meteor.Collection("posts");

if (Meteor.isClient) {
  Template.posts.helpers({
    posts: function () {
      return Posts.find();
    }
  });

  Meteor.subscribe("posts", [], function () {
    console.log("post subscription complete!");
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    Posts.remove({});

    for (var i = 0; i < 3; i += 1) {
      Posts.insert({
        message: "Message " + i
      });
    }
  });

  Meteor.publish("posts", function () {
    return Posts.find();
  });
}
