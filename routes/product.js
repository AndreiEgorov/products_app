const express = require("express");

const productController = require("../controllers/product");
const productRouter = express.Router();

productRouter.get("/", productController.getAllProds);
productRouter.get("/most_viewed", productController.getMostViewedProds);
productRouter.get("/:productId", productController.getProdByid);

productRouter.post("/", productController.createProd);
productRouter.put("/delete/:productId", productController.deleteProdById);

module.exports = productRouter;
