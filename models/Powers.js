"use strict";
const { Model, DATEONLY } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Powers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Powers.belongsToMany(models.SuperHeroys, {
        through: "heroes_to_powers",
        foreignKey: "powers_id",
      });
      Powers.hasMany(models.PowersToImages, {
        foreignKey: "powers_id",
      });
    }
  }
  Powers.init(
    {
      powerName: {
        field: "power_name",
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Powers",
      tableName: "powers",
      underscored: true,
    }
  );
  return Powers;
};
