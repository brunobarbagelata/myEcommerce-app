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

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serve at http://localhost:${port}`);
});
