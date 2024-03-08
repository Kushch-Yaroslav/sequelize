"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("superheroes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nickName: {
        field: "nick_name",
        type: Sequelize.STRING,
        allowNull: false,
      },
      realName: {
        field: "real_name",
        type: Sequelize.STRING,
        allowNull: false,
      },
      originalDescription: {
        field: "original_description",
        type: Sequelize.STRING,
      },
      catchPhrase: {
        field: "catch_phrase",
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        field: "created_at",
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        field: "updated_at",
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("superheroes");
  },
};
