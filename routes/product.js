const express = require("express");
const middlwareHandler = require("./middleware");
const productController = require("../controllers/product");

const productRouter = express.Router();

productRouter.use(["/", "/most_viewed", "/:productId"], middlwareHandler.supportedCurrencyQueryHandler);
productRouter.use(["/"], middlwareHandler.productCreationParamsHandler);

productRouter.get("/most_viewed", productController.getMostViewedProds);
productRouter.get("/:productId", productController.getProdByid);
productRouter.get("/", productController.getAllProds);

productRouter.post("/", productController.createProd);
productRouter.put("/delete/:productId", productController.deleteProdById);

module.exports = productRouter;
