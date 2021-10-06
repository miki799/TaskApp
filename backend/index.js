const express = require("express");
const app = express();
const { port } = require("./config");
const router = require("./routes/api");

// connect and start database
require("./database/mongoose");

app.use(express.json());
app.use('/api/', router);

app.listen(port, () => {
  console.log("Server listens on port: " + port);
});
