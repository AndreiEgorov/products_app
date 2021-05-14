const express = require("express");
const bodyParser = require("body-parser");
const productRouter = require("./routes/product");
const app = express();
const port = 3000;
const appLink = `http://localhost:${port}`;

app.use(bodyParser());
app.use("/products", productRouter);

app.get("/", (req, res) => {
  res.send(
    "Welcome to the Galvanize product app! got to /products to get data"
  );
});

app.listen(port, () => {
  console.log(`Product app listening at ${appLink}`);
});
