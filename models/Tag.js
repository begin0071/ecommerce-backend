// Import Sequelize classes for Model and DataTypes
const { Model, DataTypes } = require('sequelize');


// Import connection configuration
const sequelize = require('../config/connection.js');

// Create Tag class that extends Model
class Tag extends Model {}



// Defined columns for the Tag table
Tag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tag_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

// Export the Tag Model

module.exports = Tag;