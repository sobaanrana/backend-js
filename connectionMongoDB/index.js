const express = require("express");
const app = express();
const connectDB = require("./config/db");
const users = require("./routes/users");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Set the port from environment variable or default to 5000
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// body parser middleware
app.use(express.json());

// Use the users route
app.use("/api", users);

app.get("/", (req, res) => {
  console.log("Hello World!");
  res.send("Hello World! Welcome to my server!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
