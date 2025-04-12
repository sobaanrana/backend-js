// store item specific routes
const express = require("express");
const router = express.Router();

router.get("/get", (req, res) => {
  res.send("Its a get request!");
});

router.post("/items", (req, res) => {
  res.send("Its a post request!");
});

router.put("/items/:id", (req, res) => {
  res.send("Its a put request!");
});

router.delete("items/:id", (req, res) => {
  res.send("Its a delete request!");
});

module.exports = router;
