const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.get("/tasks", taskController.getTasks);
router.post("/tasks", taskController.addTask);
router.put("/tasks/:id", taskController.editTask);
router.delete("/tasks/:id", taskController.deleteTask);
router.delete("/tasks", taskController.deleteAllTasks);

module.exports = router;
