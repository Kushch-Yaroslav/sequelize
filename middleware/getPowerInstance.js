const { Powers } = require("../models");
const NotFoundError = require("../errors/NotFound");

module.exports.getPowerInstance = async (req, res, next) => {
  try {
    const {
      params: { powerId },
    } = req;
    const power = await Powers.findByPk(powerId);
    if (power) {
      req.powerInstance = power;
      next();
    } else {
      throw new NotFoundError("Power not found");
    }
  } catch (error) {
    next(error);
  }
};
