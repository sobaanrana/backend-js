const express = require("express");
const app = express();
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const productRoutes = require("./routes/productRoutes");
// load env configuration
dotenv.config();

// MongoDB connection
connectDB();

// middleware
app.use(express.json());

// load routes
app.use("/api", productRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
