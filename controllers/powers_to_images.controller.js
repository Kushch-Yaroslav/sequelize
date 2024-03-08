const NotFoundError = require("../errors/NotFound");
const { PowersToImages } = require("../models/index");

module.exports.createImagePower = async (req, res, next) => {
  try {
    const {
      params: { powerId },
      file: { filename },
    } = req;
    const createImg = await PowersToImages.create({
      image: filename,
      powersId: powerId,
    });
    res.status(200).send(createImg);
  } catch (error) {
    next(error);
  }
};

module.exports.getImagePower = async (req, res, next) => {
  try {
    const {
      params: { imageId },
    } = req;
    const foundedImage = await PowersToImages.findByPk(imageId);
    if (!foundedImage) {
      throw new NotFoundError("Изображения нету");
    }
    res.status(200).send(foundedImage);
  } catch (error) {
    next(error);
  }
};

module.exports.updateImagePower = async (req, res, next) => {
  try {
    const {
      params: { powerId, imageId },
      file: { filename },
    } = req;
    const image = await PowersToImages.findOne({
      where: { id: imageId, powersId: powerId },
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

module.exports.deleteImagePower = async (req, res, next) => {
  try {
    const {
      params: { imageId },
    } = req;
    const deletedImage = await PowersToImages.destroy({
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
    params: { powerId },
  } = req;
  try {
    const deletedAllImages = await PowersToImages.destroy({
      where: { powersId: powerId },
    });
    if (!deletedAllImages) {
      throw new NotFoundError("Нет изображений для удаления");
    }
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};
