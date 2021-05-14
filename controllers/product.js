const Product = require("../services/product");

module.exports.createProd = async (req, res) => {
  const { name, price, description } = req.body;

  if (!name || !price) {
    return res.status(400).send({
      message: `invalid parameters sent: ${JSON.stringify(req.body)}`,
    });
  }

  const product = new Product({ name, price, description });
  const newProduct = await product.create();
  res.json({ product: newProduct });
};

module.exports.getAllProds = async (req, res) => {
  const allProducts = await Product.fetchAllProds();
  res.json({ products: allProducts });
};

module.exports.getMostViewedProds = async (req, res) => {
  const prodsLimitStr = req.query && req.query.maxProducts;
  const mostViewedProds = await Product.fetchMostViewedProds(prodsLimitStr);
  res.json({ products: mostViewedProds });
};

module.exports.getProdByid = async (req, res) => {
  const productIdStr = req.params.productId;
  const prodById = await Product.fetchProdById(productIdStr);
  res.json({ product: prodById });
};

module.exports.deleteProdById = async (req, res) => {
  const productIdStr = req.params.productId;
  await Product.deactivateProductById(productIdStr);
  res.json({});
};
