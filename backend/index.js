const express = require("express");
const app = express();
const { port } = require("./config");
const router = require("./routes/api");

// connect database
require("./database/mongoose");

app.use('/', router);

app.listen(port, () => {
  console.log("Server listens on port: " + port);
});
