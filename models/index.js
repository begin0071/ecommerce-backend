// Import required models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');


// Define associations between models
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});


Category.hasMany(Product, {
  foreignKey: 'category_id',
});


Product.belongsToMany(Tag, {    // define many-to-many relationship between Product and Tag through ProductTag join table
  through: ProductTag,      // define the join table
  foreignKey: 'product_id',   // set foreign key to tag_id in ProductTag table
});


Tag.belongsToMany(Product, {
  through: ProductTag,
  foreignKey: 'tag_id',
});


// Export models and associations
module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};