// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Requiring sequelize package
var Sequelize = require("sequelize");

// Setting up our connection information
var sequelize = new Sequelize("starwars_db", "root", "root", {
    host: "localhost",
    port: 3306,
    dialet: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});


module.exports = sequelize;

