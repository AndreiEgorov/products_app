const Product = require('../services/product')

exports.getAllProds = (req, res, next) => {
    console.log("HERE")
    Product.fetchAllProds()
    res.json({type: "All products"})
}

exports.getMostViewedProds = (req, res, next) => {
    res.json({type: "Most viewed products"})
}