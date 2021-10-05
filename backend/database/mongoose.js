const mongoose = require("mongoose");
const { database } = require("../config");

mongoose
  .connect(database)
  .then(() => console.log("Database is working!"))
  .catch((error) => console.error(error));

mongoose.connection.on("error", (error) => console.error(error));
mongoose.connection.on("disconnected", (error) => console.error(error));
