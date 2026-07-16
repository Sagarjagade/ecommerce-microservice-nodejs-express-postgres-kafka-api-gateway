'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("products", {
    id: {
      type: Sequelize.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },

    categoryId: {
      type: Sequelize.UUID,
      allowNull: false,
      references: {
        model: "categories",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT",
    },

    name: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },

    description: {
      type: Sequelize.TEXT,
    },

    price: {
      type: Sequelize.DECIMAL(10, 2),
      allowNull: false,
    },

    sku: {
      type: Sequelize.STRING(100),
      allowNull: false,
      unique: true,
    },

    status: {
      type: Sequelize.ENUM("1", "0"),
      allowNull: false,
      defaultValue: "1",
    },

    createdAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },

    updatedAt: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  });
}

export async function down(queryInterface) {
  await queryInterface.dropTable("products");
}