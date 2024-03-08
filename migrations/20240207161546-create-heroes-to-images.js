"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("heroes_to_images", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      image: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      //Вероятная уязвимость
      superheroyId: {
        field: "superheroy_id",
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "superheroes",
          key: "id",
        },
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
    await queryInterface.dropTable("heroes_to_images");
  },
};
