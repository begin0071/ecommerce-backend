// Import the necessary modules
const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

// Define a new model named ProductTag that extends the base Model clasc
class ProductTag extends Model {}


ProductTag.init(
  {
    // Define an id column that is an integer, cannot be null, is the primary key, and auto-increments
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
                 
            // Define a product_id column that is an integer and references the id column of the Product model

    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
      },
    },
        // Define a tag_id column that is an integer and references the id column of the Tag model
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tag',
        key: 'id',
      },
    },
  },
   // Configure the model's options
  {
    sequelize,  // Pass in the database connection
    timestamps: false,    // Disable timestamps for this model
    freezeTableName: true,    // Don't pluralize the table name
    underscored: true,    // Use underscores instead of camelCase in column names
    modelName: 'product_tag',     // Set the model name to product_tag
  }
);

module.exports = ProductTag;