const express = require("express");
const app = express();
const { port } = require("./config");
const router = require("./routes/api");

// connect database
require("./database/mongoose");

// application/json
app.use(express.json());

// attach api, last thing to do!
app.use('/api/', router);

app.listen(port, () => {
  console.log("Server listens on port: " + port);
});
