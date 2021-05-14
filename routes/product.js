const express = require("express");
const productController = require('../controllers/product')

const productRouter = express.Router();


// productRouter.get("/", (req, res)=>{
//     console.log("here")
//     res.json("sdfsdf")

// });
productRouter.get("/", productController.getAllProds);
productRouter.get("/most_viewed", productController.getMostViewedProds);

module.exports = productRouter;
