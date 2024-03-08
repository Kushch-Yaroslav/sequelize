"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class HeroesToPowers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    //Вероятная уязвимость
    static associate(models) {
      //   HeroesToPowers.belongsToMany(models.SuperHeroys, {
      //     through: "heroes_to_powers",
      //     foreignKey: "superheroy_id",
      //   });
      //   HeroesToPowers.belongsToMany(models.Powers, {
      //     through: "heroes_to_powers",
      //     foreignKey: "powers_id",
      //   });
    }
  }
  HeroesToPowers.init(
    {
      superheroy_id: DataTypes.INTEGER,
      powers_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "HeroesToPowers",
      tableName: "heroes_to_powers",
      underscored: true,
    }
  );
  return HeroesToPowers;
};
