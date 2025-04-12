// including the express module and initializing the app
const express = require("express");
const app = express();

// variable to store the port number
port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// start app or server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
