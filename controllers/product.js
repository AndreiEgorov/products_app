const Product = require("../services/product");
const exchange = require("../services/exchange");

module.exports.createProd = async (req, res) => {
  const { name, price, description } = req.body;
  const product = new Product({ name, price, description });
  const newProduct = await product.create();
  res.json({ product: newProduct });
};

module.exports.getAllProds = async (req, res) => {
  const { targetCurrency } = req.query;
  let allProducts = await Product.fetchAllProds();
  if (targetCurrency) {
    allProducts = await exchange.convertPrices(allProducts, targetCurrency);
  }
  res.json({ products: allProducts });
};

module.exports.getMostViewedProds = async (req, res) => {
  const { targetCurrency, maxProducts } = req.query;

  let mostViewedProds = await Product.fetchMostViewedProds(maxProducts);
  if (targetCurrency) {
    mostViewedProds = await exchange.convertPrices(
      mostViewedProds,
      targetCurrency
    );
  }

  res.json({ products: mostViewedProds });
};

module.exports.getProdByid = async (req, res) => {
  const { productId } = req.params;
  const { targetCurrency } = req.query;

  let prodById = await Product.fetchProdById(productId);
  if (targetCurrency) {
    prodById = await exchange.convertPrices(prodById, targetCurrency);
  }
  res.json({ product: prodById });
};

module.exports.deleteProdById = async (req, res) => {
  const productIdStr = req.params.productId;
  await Product.deactivateProductById(productIdStr);
  res.json({});
};
