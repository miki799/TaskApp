const Task = require("../database/models/task");

class TaskController {
  async getTasks(req, res) {
    try {
      const doc = await Task.find({});
      res.status(200).json(doc);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: 500, message: error.message });
    }
  }

  async addTask(req, res) {
    const name = req.body.name;
    const description = req.body.description;
    const start = req.body.start;
    const end = req.body.end;
    const status = false;
    const newTask = new Task({
      name: name,
      description: description,
      start: new Date(start),
      end: new Date(end),
      status: status,
    });
    await newTask
      .save()
      .then(() => {
        res.status(200).json(newTask);
      })
      .catch((error) => console.error(error));
  }

  editTask(req, res) {
    const id = req.params.id;
    console.log("Task edited: " + id);
  }

  deleteTask(req, res) {
    const id = req.params.id;
    console.log("Task deleted: " + id);
  }
}

module.exports = new TaskController();
