const { Router } = require("express");
const heroysController = require("../../controllers/heroys.controller");
const heroy_to_images = require("../../controllers/heroes_to_images.controller");
const { getHeroyInstance } = require("../../middleware/getHeroyInstance");
const { pagination } = require("../../middleware/pagination");
const { uploadHeroyImage } = require("../../middleware/imageUploadMiddleware");
const heroysRouter = Router();

heroysRouter.post("/", heroysController.createHeroy);
heroysRouter.get("/:heroyId", heroysController.getOneHeroy);
heroysRouter.get("/", pagination, heroysController.getAllHeroys);
heroysRouter.patch(
  "/:heroyId",
  getHeroyInstance,
  heroysController.updatedHeroys
);
heroysRouter.delete("/:heroyId", heroysController.deleteHeroy);
heroysRouter.delete("/", heroysController.deleteAllHeroy);

////////////////////////IMAGES

heroysRouter.post(
  "/img/:heroyId",
  (req, res, next) => {
    req.imageType = "heroy";
    next();
  },
  uploadHeroyImage,
  heroy_to_images.createImageHeroy
);
heroysRouter.put(
  "/img/:heroyId/:imageId",
  (req, res, next) => {
    req.imageType = "heroy";
    next();
  },
  uploadHeroyImage,
  heroy_to_images.updateImageHeroy
);
heroysRouter.get("/images/:imageId", heroy_to_images.getImageHeroy);

heroysRouter.delete("/imagesDel/:imageId", heroy_to_images.deleteImageHeroy);
heroysRouter.delete("/images/:heroyId", heroy_to_images.deleteAllImages);

module.exports = heroysRouter;

//heroyImage

//powerImage
