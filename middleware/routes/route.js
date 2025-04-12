const express = require("express");
const router = express.Router();

// Middlewares
const auth = function (req, res, next) {
  console.log("Auth middleware from route");

  req.user = { name: "John Doe", id: 1, role: "student" };

  if (req.user) {
    next();
  } else {
    res.json({
      success: false,
      message: "User not authenticated",
    });
  }
};

const isStudent = function (req, res, next) {
  console.log("Is student middleware from route");

  if (req.user.role === "student") {
    next();
  } else {
    res.json({
      success: false,
      message: "Access denied, this route is only for students",
    });
  }
};

const isAdmin = function (req, res, next) {
  console.log("Is admin middleware from route");

  if (req.user.role === "admin") {
    next();
  } else {
    res.json({
      success: false,
      message: "Access denied, this route is only for admins",
    });
  }
};

// routes
router.get("/student", auth, isStudent, (req, res) => {
  // route specific middleware and then route handler
  res.send("this is the student route");
  res.send("student specific page");
});

router.get("/admin", auth, isAdmin, (req, res) => {
  res.send("this is the admin route");
  res.send("admin specific page");
});

module.exports = router;
