const { Powers, SuperHeroys } = require("../models/index");

module.exports.createPower = async (req, res, next) => {
  try {
    const { body } = req;
    console.log(body);
    const createdPower = await Powers.create(body);
    res.status(201).send(createdPower);
  } catch (error) {
    next(error);
  }
};

module.exports.getOnePower = async (req, res, next) => {
  try {
    const {
      params: { powerId },
    } = req;
    const foundedPower = await Powers.findByPk(powerId);
    if (!foundedPower) {
      throw new NotFoundError("Super Heroy not found");
    }
    res.status(200).send(foundedPower);
  } catch (error) {
    next(error);
  }
};
module.exports.getAllPowers = async (req, res, next) => {
  try {
    const foundedPowerAll = await Powers.findAll();
    res.status(200).send(foundedPowerAll);
  } catch (error) {
    next(error);
  }
};
module.exports.updatedPowers = async (req, res, next) => {
  try {
    const {
      body,
      params: { powerId },
    } = req;
    const updatedPowers = await Powers.update(body, {
      where: { id: powerId },
    });
    res.status(200).send(body);
  } catch (error) {
    next(error);
  }
};
module.exports.deletePower = async (req, res, next) => {
  try {
    const {
      params: { powerId },
    } = req;
    const deletedHeroy = await Powers.destroy({ where: { id: powerId } });
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

///////HEROES_TO_POWERS
module.exports.addPowerToHeroes = async (req, res, next) => {
  try {
    const {
      params: { powerId },
      body: { heroyId },
    } = req;
    const powerInstance = await Powers.findByPk(powerId);
    const heroyInstance = await SuperHeroys.findByPk(heroyId);
    const [result] = await heroyInstance.addPowers(powerInstance);
    await heroyInstance.save();
    res.status(200).send(result);
  } catch (error) {
    next(error);
  }
};
