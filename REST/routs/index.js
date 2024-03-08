const { Router } = require("express");
const heroysRouter = require("./heroyRouter");
const powersRouter = require("./powerRouter");

const rootRouter = Router();

rootRouter.use("/heroys", heroysRouter);
rootRouter.use("/powers", powersRouter);

module.exports = rootRouter;
