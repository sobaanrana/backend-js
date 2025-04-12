const express = require("express");
const app = express();
const port = 3000;

// loading middleware into the app
app.use(express.json());

// middleware - logging, auth, validation
const loggingMiddleware = function (req, res, next) {
  console.log("Logging middleware");
  next();
};

// loading middleware into the app
app.use(loggingMiddleware);

const authMiddleware = function (req, res, next) {
  console.log("Auth middleware");
  next();
  //   res.send("middleware stopped here"); // middleware can end res req cycle
};

// loading middleware into the app
app.use(authMiddleware);

const validationMiddleware = function (req, res, next) {
  console.log("Validation middleware");
  next();
};

// loading middleware into the app
app.use(validationMiddleware);

// these middlewares should be executed before the route handler function

app.get("/", (req, res) => {
  console.log(req.body);
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

const route = require("./routes/route");

// ...

app.use("/api", route);
