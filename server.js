
// DEPENDENCIES
var express = require("express");
var bodyParser = require("body-parser");

// configure express
var app = express();

// Set port
var PORT = process.env.PORT || 3000;

// set up middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());


// Routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
