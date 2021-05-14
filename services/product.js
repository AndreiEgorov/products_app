const db = require("./db");

module.exports = class Product {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }

  static async fetchAllProds() {

    const prods = await db.any("SELECT * FROM product");
    console.log("prods", bob);
  }
};
