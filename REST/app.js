const express = require("express");
const rootRouter = require("./routs");
const { errorHandler } = require("../errors/errorHandler");

const app = express();

const bodyParser = express.json();

app.use(bodyParser);
app.use(express.static("public"));
app.use("/api", rootRouter);
app.use(errorHandler);
module.exports = app;
