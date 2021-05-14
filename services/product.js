const db = require("./utils/db");

module.exports = class Product {
  constructor({ name, price, description }) {
    this.name = name;
    this.price = +price;
    this.description = description;
  }
  async create() {
    return await db.one(
      "WITH new_entry AS (INSERT INTO view_counter DEFAULT VALUES RETURNING *), new_product AS (INSERT INTO product (name, price, description, view_counter_id) VALUES($1, $2, $3, (SELECT id FROM new_entry)) RETURNING *) SELECT product_id, name, price, description FROM new_product",
      [this.name, this.price, this.description]
    );
  }

  static async fetchAllProds() {
    return await db.any(
      "SELECT product_id, name, price, description FROM product"
    );
  }

  static async fetchMostViewedProds(prodsLimitStr = "5") {
    return await db.any(
      "SELECT p.product_id, p.name, p.price, p.description FROM product AS p INNER JOIN view_counter AS vc ON p.view_counter_id = vc.id WHERE p.is_active = TRUE AND vc.count_value > 0 ORDER BY count_value DESC LIMIT $1",
      [prodsLimitStr]
    );
  }

  static async fetchProdById(productIdStr) {
    return await db.one(
      "WITH p_s AS (SELECT * FROM product WHERE is_active = TRUE AND product_id = $1), v_u AS (UPDATE view_counter SET count_value = count_value + 1 WHERE id = (SELECT view_counter_id FROM p_s) returning *) SELECT product_id, name, price, description FROM p_s",
      [productIdStr]
    );
  }

  static async deactivateProductById(productIdStr) {
    return await db.none(
      "UPDATE product SET is_active = FALSE WHERE product_id = $1",
      [productIdStr]
    );
  }
};
