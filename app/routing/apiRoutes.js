// Load friends data array
var friends = require("../data/friends");

// routes
module.exports = function(app) {
  
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    
    // object to hold the best match
    var bestMatch = {
      name: "",
      photo: "",
      friendDifference: Infinity
    };

    var userData = req.body;
    var userScores = userData.scores;

    // variable to hold the result of the calculations    
    var totalDifference;

    // loop through the friends array
    for (var i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      totalDifference = 0;

      // loop through all the scores of each friend
      for (var j = 0; j < currentFriend.scores.length; j++) {
        var currentFriendScore = currentFriend.scores[j];
        var currentUserScore = userScores[j];

        
        // calculate the difference between the scores 
        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
      }

      // If the sum of differences is less then the differences of the current "best match"
      if (totalDifference <= bestMatch.friendDifference) {
        // Reset the bestMatch to be the new friend.
        bestMatch.name = currentFriend.name;
        bestMatch.photo = currentFriend.photo;
        bestMatch.friendDifference = totalDifference;
      }
    }

   
    friends.push(userData);

    res.json(bestMatch);
  });
};
