// Import the necessary modules
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

// Define a Category class that extends Model

class Category extends Model {}

Category.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,          // Establish the connection to the database
    timestamps: false,         // Don't automatically add createdAt and updatedAt fields
    freezeTableName: true,         // Prevent Sequelize from automatically pluralizing the model name to form the table name
    underscored: true,         // Use underscores instead of camel-casing for column names
    modelName: 'category',     // Set the model name in singular form
  }  
);



// Export the Category model for use in other modules
module.exports = Category;