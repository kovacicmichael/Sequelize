// *********************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
// *********************************************************************************

// Dependencies
// =============================================================
var express = require("express");
var db = require("./models")

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;


//this way the server will not start until the link to our database has been established
db.sequelize.sync().then(function (){
	app.listen(PORT, function(){
		console.log("listeing on port" + PORT);
	})
});


// Starts the server to begin listening
// =============================================================



//this code is no longer needed 
// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });
