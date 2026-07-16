import sequelize from "../config/db.js";
import Category from "./category.model.js";
import Product from "./product.model.js";

/*
|--------------------------------------------------------------------------
| Associations
|--------------------------------------------------------------------------
*/

Category.hasMany(Product, {
    foreignKey: "categoryId",
    as: "products",
});

Product.belongsTo(Category, {
    foreignKey: "categoryId",
    as: "category",
});

module.exports = {
    sequelize,
    Category,
    Product,
};