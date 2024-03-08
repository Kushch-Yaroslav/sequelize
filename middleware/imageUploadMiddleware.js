const multer = require("multer");
const path = require("path");

const imagesHeroy = path.resolve(__dirname, "../public/images_heroys");
const imagesPower = path.resolve(__dirname, "../public/images_power");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let imagePath;
    if (req.imageType === "heroy") {
      imagePath = imagesHeroy;
    } else if (req.imageType === "power") {
      imagePath = imagesPower;
    }
    cb(null, imagePath);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}_${file.originalname}`);
  },
});
const upload = multer({ storage });

module.exports = {
  uploadHeroyImage: upload.single("heroyImage"),
  uploadPowerImage: upload.single("powerImage"),
};
