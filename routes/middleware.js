const Exchange = require("../services/exchange");

module.exports.supportedCurrencyQueryHandler = (req, res, next) => {
  const { targetCurrency } = req.query;

  if (req.method === "GET") {
    if (targetCurrency && !Exchange.isSupportedCurrency(targetCurrency)) {
      return res.status(400).send({
        message: `requested currency is not supported: ${targetCurrency}`,
      });
    }
  }

  next();
};

module.exports.productCreationParamsHandler = (req, res, next) => {
  const { name, price } = req.body;

  if (req.method === "POST") {
    if (!name || !price) {
      return res.status(400).send({
        message: `invalid parameters sent: ${JSON.stringify(req.body)}`,
      });
    }
  }
  next();
};
