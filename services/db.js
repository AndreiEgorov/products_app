const initOptions = {};
const pgp = require("pg-promise")(initOptions);

const cn = {
  host: "localhost",
  port: 5432,
  database: "galvanize_test",
  user: "postgres",
  password: "password",
};

const db = pgp(cn);

module.exports = db;
