const { SuperHeroys } = require("../models/index");
const NotFoundError = require("../errors/NotFound");

module.exports.createHeroy = async (req, res, next) => {
  try {
    const { body } = req;
    const createdHeroy = await SuperHeroys.create(body);
    console.log(createdHeroy);
    res.status(201).send(createdHeroy);
  } catch (error) {
    next(error);
  }
};

module.exports.getOneHeroy = async (req, res, next) => {
  try {
    const {
      params: { heroyId },
    } = req;
    const foundedHeroy = await SuperHeroys.findByPk(heroyId);
    if (!foundedHeroy) {
      throw new NotFoundError("Super Heroy not found");
    }
    res.status(200).send(foundedHeroy);
  } catch (error) {
    next(error);
  }
};
module.exports.getAllHeroys = async (req, res, next) => {
  try {
    const foundedAll = await SuperHeroys.findAll();
    res.status(200).send(foundedAll);
  } catch (error) {
    next(error);
  }
};
module.exports.updatedHeroys = async (req, res, next) => {
  try {
    const {
      body,
      params: { heroyId },
    } = req;
    const updatedHeroys = await SuperHeroys.update(body, {
      where: { id: heroyId },
    });
    res.status(200).send(body);
  } catch (error) {
    next(error);
  }
};
module.exports.deleteHeroy = async (req, res, next) => {
  try {
    const {
      params: { heroyId },
    } = req;
    const deletedHeroy = await SuperHeroys.destroy({ where: { id: heroyId } });
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
module.exports.deleteAllHeroy = async (req, res, next) => {
  try {
    const deletedAllHeroy = await SuperHeroys.destroy({ where: {} });
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
