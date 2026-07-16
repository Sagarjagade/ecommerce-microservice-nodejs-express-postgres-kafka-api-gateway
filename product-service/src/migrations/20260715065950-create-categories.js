'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("categories", {
    id: {

      type: Sequelize.UUID,

      defaultValue: Sequelize.UUIDV4,

      allowNull: false,

      primaryKey: true

    },

    name: {

      type: Sequelize.STRING(100),

      allowNull: false,

      unique: true

    },

    description: {

      type: Sequelize.TEXT

    },

    createdAt: {

      allowNull: false,

      type: Sequelize.DATE

    },

    updatedAt: {

      allowNull: false,

      type: Sequelize.DATE

    }
  });
}

export async function down(queryInterface) {
  await queryInterface.dropTable("categories");
}