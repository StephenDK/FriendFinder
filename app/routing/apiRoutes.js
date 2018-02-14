// Load Data
var friends = require("../data/friends");

// Routes
module.exports = function(application) {

    // When the user visits the api friends link
    // API GET Request
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // When the user submits the form
    // API POST Request
    app.post("/api/friends", function(req, res) {

        // object to hold the best match
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: Infinity
        }

        // parse users POST survey
        var userData = req.body;
        var userScores = userData.scores;

        // variable used to calculate total score
        var totalDifference;

        // loop through all the friends
        for (var i = 0; i < friends.length; i++) {
            var currentFriend = friends[i];
            totalDifference = 0;

            // test and debugging
            console.log(currentFriend.name);

            // Loop through the scores of each friend
            for (var j = 0; j < currentFriend.scores.length; j++) {
                var currentFriendScore = currentFriend.scores[j];
                var currentUserScore = userScores[j];

                // Calculate the difference
                totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
            }

            if (totalDifference <= bestMatch.friendDifference) {
                // reset bestMatch to new friend
                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.friendDifference = totalDifference;
            }
        }

        // save users data
        friends.push(userData);

        // return json of users best match
        res.json(bestMatch);
    });
};