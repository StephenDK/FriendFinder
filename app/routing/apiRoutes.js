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
            photo: ""
        }
    })
}