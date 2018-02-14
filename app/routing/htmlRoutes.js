// Dependencies
// 
var path = require("path");

// Routing
// 
module.exports = function(application) {

    // Path redirects
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));

    });

    
};