const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Product = require("./models/Product");

mongoose
  .connect("mongodb://localhost:27017/productDB")
  .then((self) =>
    console.log(`Connected to the database: "${self.connection.name}"`)
  );

const app = express();
app.use(cors());
app.use(express.json()); //for req.body

app.get("/", (req, res) => {
  console.log(data.products);
  res.send("Server is ready");
});

app.get("/one-product", async (req, res) => {
  let oneProduct = await Product.findById(req.query.productId);
  res.json(oneProduct);
});

app.get("/api/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
