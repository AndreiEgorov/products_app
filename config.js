// the values below are critically important and would normally not be stored like inside project repo. They would be either stored in env variables or files kept away from the project's code.

const currencyExchangeAccessKey = "27d0a0d0fc80ff8753d8023b46cd515d";
const supportedCurrencies = ["USD", "CAD", "EUR", "GBP"];
const sourceCurrency = "USD";
const pgDbName = "galvanize_test";
const pgUser = "postgres";
const pgPassword = "password";

module.exports = {
  currencyExchangeAccessKey,
  supportedCurrencies,
  sourceCurrency,
  pgDbName,
  pgUser,
  pgPassword,
};
