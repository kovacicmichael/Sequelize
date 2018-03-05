// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

var Character = sequelize.define("character", {
	routeName: {
		type: Sequelize.STRING
		//can also put in validation through this syntax
	},
	name: {
		type: Sequelize.STRING
	},
	role: {
		type: Sequelize.STRING
	},
	age: {
		type: Sequelize.INTEGER
	},
	forcePoints: Sequelize.INTEGER,
	//this snyntax works as well
})

Character.sync();


module.exports = Character;