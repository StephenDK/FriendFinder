
// DEPENDENCIES

var path = require("path");

// Routes

module.exports = function(app) {

// route for the survey
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

//   if theer is no matching route go to home page
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

};
