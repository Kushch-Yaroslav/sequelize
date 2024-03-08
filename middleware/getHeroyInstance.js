const { SuperHeroys } = require("../models");
const NotFoundError = require("../errors/NotFound");

module.exports.getHeroyInstance = async (req, res, next) => {
  try {
    const {
      params: { heroyId },
    } = req;
    const heroy = await SuperHeroys.findByPk(heroyId);
    if (heroy) {
      req.heroyInstance = heroy;
      next();
    } else {
      throw new NotFoundError("Super Heroy not found");
    }
  } catch (error) {
    next(error);
  }
};
