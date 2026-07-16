
import DataTypes from "sequelize";
export default (sequelize) => {
    return sequelize.define(
        "Product",
        {
            id: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
                primaryKey: true,
            },

            categoryId: {
                type: DataTypes.UUID,
                allowNull: false,
            },

            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },

            description: {
                type: DataTypes.TEXT,
            },

            price: {
                type: DataTypes.DECIMAL(10, 2),
                allowNull: false,
            },

            sku: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },

            status: {
                type: DataTypes.ENUM("1", "0"),
                defaultValue: "1",
            },
        },
        {
            tableName: "products",
            timestamps: true,
        }
    );
};