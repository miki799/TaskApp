const express = require("express");
const router = express.Router();
//const test = require("../controllers/tests/tests");
const taskController = require("../controllers/taskController");

router.get('/', taskController.addTask);
  
module.exports = router;