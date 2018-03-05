// Dependencies
// =============================================================
// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Require the sequelize library
// Require the connection to the database (connection.js)

// Create a "Book" model with the following configuration

// 1. A title property of type STRING
// 2. An author property of type STRING
// 3. A genre property of type STRING
// 4. A pages property of type INTEGER
// 5. Set timestamps to false on this model
var Book = sequelize.define("book", {
	title: Sequelize.STRING,
	author: Sequelize.STRING,
	genre: Sequelize.STRING,
	pages: Sequelize.INTEGER,
},{
	timestamps: false
});



// Sync model with DB


// Export the book model for other files to use
Book.sync()

module.exports = Book;
