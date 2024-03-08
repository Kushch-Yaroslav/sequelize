"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PowersToImages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      PowersToImages.belongsTo(models.Powers, {
        foreignKey: "powers_id",
      });
    }
  }
  PowersToImages.init(
    {
      image: { type: DataTypes.TEXT, allowNull: false },
      powersId: {
        field: "powers_id",
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "PowersToImages",
      tableName: "powers_to_images",
      underscored: true,
    }
  );
  return PowersToImages;
};
