// Dependencies 
// 

//Express 
 var express = require("express");
//  bodyParser
var bodyParser = require("body-parser");

// Create an instance of express
var app = express();

// Set initial port
var PORT = process.env.PORT || 3000;

// Set up body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// require api routes



// Listener
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})


