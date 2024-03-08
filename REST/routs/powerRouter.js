const { Router } = require("express");
const powerController = require("../../controllers/powers.controller");
const power_to_images_Controller = require("../../controllers/powers_to_images.controller");
const { getPowerInstance } = require("../../middleware/getPowerInstance");
const { pagination } = require("../../middleware/pagination");
const { uploadPowerImage } = require("../../middleware/imageUploadMiddleware");
const powersRouter = Router();

powersRouter.post("/", powerController.createPower);
powersRouter.post("/:powerId", powerController.addPowerToHeroes);
powersRouter.get("/:powerId", powerController.getOnePower);
powersRouter.get("/", pagination, powerController.getAllPowers);
powersRouter.patch(
  "/:powerId",
  getPowerInstance,
  powerController.updatedPowers
);
powersRouter.delete("/:powerId", powerController.deletePower);

///////////////////////IMAGES
powersRouter.post(
  "/img/:powerId",
  (req, res, next) => {
    req.imageType = "power";
    next();
  },
  uploadPowerImage,
  power_to_images_Controller.createImagePower
);

powersRouter.put(
  "/img/:powerId/:imageId",
  (req, res, next) => {
    req.imageType = "power";
    next();
  },
  uploadPowerImage,
  power_to_images_Controller.createImagePower
);

powersRouter.get("/images/:imageId", power_to_images_Controller.getImagePower);

powersRouter.delete(
  "/imagesDel/:imageId",
  power_to_images_Controller.deleteImagePower
);
powersRouter.delete(
  "/images/:powerId",
  power_to_images_Controller.deleteAllImages
);
module.exports = powersRouter;
