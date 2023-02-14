// Import required modules and packages
const { Model, DataTypes } = require('sequelize');


const sequelize = require('../config/connection');

// Define the Product model
class Product extends Model {}

// Initialize the Product model with its attributes
Product.init(
  {
   
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true,
      },
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
      },
    },
  },
  {
    sequelize,    // the database connection
    timestamps: false,     // disables createdAt and updatedAt fields
    freezeTableName: true,     // prevents Sequelize from pluralizing the table name
    underscored: true,       // converts camel case column names to snake case
    modelName: 'product',      // the model name
  }
);



// Export the Product model for use in other modules
module.exports = Product;