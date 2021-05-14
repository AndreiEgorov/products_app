const express = require("express");

const productsRouter = express.Router();

productsRouter.get("/", (req, res, next) => {
  res.json("my return");
});

module.exports = productsRouter;
