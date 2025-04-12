const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Requests

// app.get("/get", (req, res) => {
//   res.send("Its a get request!");
// });

// app.post("/items", (req, res) => {
//   res.send("Its a post request!");
// });

// app.put("/items/:id", (req, res) => {
//   res.send("Its a put request!");
// });

// app.delete("items/:id", (req, res) => {
//   res.send("Its a delete request!");
// });

// we can do chaining of requests
// app
//   .get("/get", (req, res) => {
//     res.send("Its a get request!");
//   })
//   .post("/items", (req, res) => {
//     res.send("Its a post request!");
//   })
//   .put("/items/:id", (req, res) => {
//     res.send("Its a put request!");
//   })
//   .delete("items/:id", (req, res) => {
//     res.send("Its a delete request!");
//   });

// we can use same routes for different methods

// route parameters in the path of the route
app.get("/users/:userId/books/:bookId", (req, res) => {
  res.send(req.params);
});

// seding file
app.get("/file", (req, res) => {
  res.sendFile("dummy.html", { root: __dirname });
});

// sending json
app.get("/json", (req, res) => {
  res.json({ name: "John", age: 30 });
});

// handling routes in an optimal way

// import item router file

const item = require("./routes/item.js");

// load into application

app.use("/api", item);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// route for products
const products = require("./routes/product.js");
app.use("/products", products);
