const express = require("express");
const app = express();
const path = require("path");

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

let products = [];

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.post("/api/products", (req, res) => {
  const { name, review, rating } = req.body;

  const newProduct = {
    id: Date.now(),
    name,
    review,
    rating
  };

  products.push(newProduct);
  res.json(newProduct);
});

app.delete("/api/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  products = products.filter(p => p.id !== id);
  res.json({ success: true });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});