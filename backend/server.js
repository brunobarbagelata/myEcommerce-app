import express from "express";
import data from "./data.js";

const app = express();

app.get("/", (req, res) => {
  console.log(data.products);
  res.send("Server is ready");
});

app.get("/api/products", (req, res) => {
  res.json(data.products);
});

app.listen(5000, () => {
  console.log("Serve at http://localhost:5000");
});
