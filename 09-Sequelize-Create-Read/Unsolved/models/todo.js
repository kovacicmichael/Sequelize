module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define("Todo", {
    text: {
    	type: DataTypes.STRING,
    	allowNull: false,
    	validate: {
    		len: {
    			args: [2,10],
    			msg: "Must be between 2 and 10 characters"
    		}
    	}
    },
    complete: {
    	type: DataTypes.BOOLEAN,

    	//is a flag 
    	defaultValue: false
    }
  });
  return Todo;
};
