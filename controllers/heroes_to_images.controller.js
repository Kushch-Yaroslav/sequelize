const NotFoundError = require("../errors/NotFound");
const { SuperHeroys, HeroesToImages } = require("../models/index");

module.exports.createImageHeroy = async (req, res, next) => {
  try {
    const {
      params: { heroyId },
      file: { filename },
    } = req;
    const createImg = await HeroesToImages.create({
      image: filename,
      superheroy_id: heroyId,
    });
    res.status(200).send(createImg);
  } catch (error) {
    next(error);
  }
};

module.exports.getImageHeroy = async (req, res, next) => {
  try {
    const {
      params: { imageId },
    } = req;
    const foundedImage = await HeroesToImages.findByPk(imageId);
    if (!foundedImage) {
      throw new NotFoundError("Изображения нету");
    }
    res.status(200).send(foundedImage);
  } catch (error) {
    next(error);
  }
};

module.exports.updateImageHeroy = async (req, res, next) => {
  try {
    const {
      params: { heroyId, imageId },
      file: { filename },
    } = req;
    const image = await HeroesToImages.findOne({
      where: { id: imageId, superheroy_id: heroyId },
    });
    if (!image) {
      return res.status(404).send({ error: "Image not found" });
    }
    // Обновляем информацию о файле только для конкретного изображения
    await image.update({ image: filename });
    res.status(200).send(image);
  } catch (error) {
    next(error);
  }
};

module.exports.deleteImageHeroy = async (req, res, next) => {
  try {
    const {
      params: { imageId },
    } = req;
    const deletedImage = await HeroesToImages.destroy({
      where: { id: imageId },
      returning: true,
    });
    if (!deletedImage) {
      throw new NotFoundError("Изображение удалено или не создано");
    }
    res.status(204).send(`Deleted image ${imageId}`);
  } catch (error) {
    next(error);
  }
};
module.exports.deleteAllImages = async (req, res, next) => {
  const {
    params: { heroyId },
  } = req;
  try {
    const deletedAllHeroy = await HeroesToImages.destroy({
      where: { superheroy_id: heroyId },
    });
    if (!deletedAllHeroy) {
      throw new NotFoundError("Нет изображений для удаления");
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
