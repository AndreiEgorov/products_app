const axios = require("axios");
const config = require("../config");

// I am assuming we need the MOST recent currency conversion rate for every request. Therefore, the quote output is not preloaded and is not stored. The request is sent every time a user provides a supported "?targetCurrency=xxx" query.
const getQuote = async (targetCurrencyStr) => {
  targetCurrencyStr = targetCurrencyStr.toUpperCase();
  const sourceCurrencyStr = config.sourceCurrency.toUpperCase();
  try {
    const res = await axios.get(
      `http://api.currencylayer.com/live?access_key=${config.currencyExchangeAccessKey}&source=${sourceCurrencyStr}&currencies=${targetCurrencyStr}`
    );
    return res.data.quotes[sourceCurrencyStr + targetCurrencyStr]; //
  } catch (error) {
    console.error(error);
    return error;
  }
};

const isSupportedCurrency = (currStr) => {
  if (!currStr) {
    return;
  }
  currStr = currStr.toUpperCase();
  return config.supportedCurrencies.includes(currStr);
};

const convertPrices = async (product, targetCurr) => {
  if (!product) {
    return;
  }
  const ratioNumber = await getQuote(targetCurr);
  if (Array.isArray(product)) {
    return product.map((p) => {
      return {
        ...p,
        price: p.price * ratioNumber,
        priceCurrency: targetCurr,
      };
    });
  } else {
    return {
      ...product,
      price: product.price * ratioNumber,
      priceCurrency: targetCurr,
    };
  }
};

module.exports = {
  isSupportedCurrency,
  convertPrices,
};
