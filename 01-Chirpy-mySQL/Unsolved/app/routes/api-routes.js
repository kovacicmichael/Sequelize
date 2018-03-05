// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  app.get("/api/all", fiunction(req, res){
  		var dbQuery = "SELECT * FROM chirps";

  		connection.query(bdQuery, function(err, result){
  			if(err) throw err;
  			res.json(reslut);
  		});
  });


  // Add a chirp
  app.post("/api/new", function())


};
