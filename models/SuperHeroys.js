"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SuperHeroys extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    //Вероятная уязвимость
    static associate(models) {
      SuperHeroys.hasMany(models.HeroesToImages, {
        foreignKey: "superheroy_id",
      });
      SuperHeroys.belongsToMany(models.Powers, {
        through: "heroes_to_powers",
        foreignKey: "superheroy_id",
      });
    }
  }
  SuperHeroys.init(
    {
      nickName: {
        field: "nick_name",
        type: DataTypes.STRING,
        allowNull: false,
      },
      realName: {
        field: "real_name",
        type: DataTypes.STRING,
        allowNull: false,
      },
      originalDescription: {
        field: "original_description",
        type: DataTypes.STRING,
      },
      catchPhrase: {
        field: "catch_phrase",
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "SuperHeroys",
      tableName: "superheroes",
      underscored: true,
    }
  );
  return SuperHeroys;
};
