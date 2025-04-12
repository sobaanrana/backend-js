// store item specific routes
const express = require("express");
const router = express.Router();

router.get("/get", (req, res) => {
  res.send("Its a get request for products!");
});

router.post("/products", (req, res) => {
  res.send("Its a post request for products!");
});

router.put("/products/:id", (req, res) => {
  res.send("Its a put request for products!");
});

router.delete("products/:id", (req, res) => {
  res.send("Its a delete request for products!");
});

module.exports = router;
