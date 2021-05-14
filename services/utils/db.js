const config = require("../../config");
const initOptions = {};
const pgp = require("pg-promise")(initOptions);

const cn = {
  host: "localhost",
  port: 5432,
  database: config.pgDbName,
  user: config.pgUser,
  password: config.pgPassword,
};

const db = pgp(cn);

module.exports = db;
