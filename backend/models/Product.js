const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: String,
  category: String,
  image: String,
  price: Number,
  countInStock: Number,
  brand: String,
  rating: Number,
  numReviews: Number,
  description: String,
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
