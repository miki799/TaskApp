const Task = require("../database/models/task");

module.exports = {
  addTask(req, res) {
    const newTask = new Task({
      name: "Nazwa",
      description: "Description",
      start: new Date(),
      end: new Date(),
      status: false,
    });
    newTask
      .save()
      .then(() => {
        console.log("Task has been added!");
        res.send("Task added!");
      })
      .catch((error) => console.error(error));
  },
};
