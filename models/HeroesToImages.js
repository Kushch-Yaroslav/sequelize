"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class HeroesToImages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      HeroesToImages.belongsTo(models.SuperHeroys, {
        foreignKey: "superheroy_id",
      });
    }
  }
  HeroesToImages.init(
    {
      image: { type: DataTypes.TEXT, allowNull: false },
      superheroy_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "HeroesToImages",
      tableName: "heroes_to_images",
      underscored: true,
    }
  );
  return HeroesToImages;
};
