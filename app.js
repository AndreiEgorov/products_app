const express = require("express");
const productsRouter = require("./routes/products");
const app = express();
const port = 3000;
const appLink = `http://localhost:${port}`;

app.use("/products", productsRouter);

app.get("/", (req, res) => {
  res.send(
    "Welcome to the Galvanize product app! got to /products to get data"
  );
});

app.listen(port, () => {
  console.log(`Product app listening at ${appLink}`);
});
