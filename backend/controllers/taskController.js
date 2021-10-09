const Task = require("../database/models/task");

class TaskController {
  async getTasks(req, res) {
    try {
      const doc = await Task.find({});
      console.log(doc);
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
    try {
      const newTask = new Task({
        name: name,
        description: description,
        start: new Date(start),
        end: new Date(end),
      });
      await newTask.save().then(() => res.status(200).json(newTask));
      console.log(newTask);
    } catch (error) {
      if (error.message.includes("Task validation failed")) {
        return res.status(422).json({ status: 422, message: error.message });
      } else {
        return res.status(500).json({ status: 500, message: error.message });
      }
    }
  }

  async editTask(req, res) {
    let edited = false;
    const id = req.params.id;
    const name = req.body.name;
    const description = req.body.description;
    const start = req.body.start;
    const end = req.body.end;
    const toDo = req.body.toDo;
    const inProgress = req.body.inProgress;
    const finished = req.body.finished;
    try {
      const editedTask = await Task.findOne({ _id: id });
      if (!editedTask) {
        return res
          .status(404)
          .json({ status: 404, message: "Task not found in database" });
      }
      if (name !== undefined) {
        editedTask.name = name;
        if (!edited) edited = true;
      }
      if (description !== undefined) {
        editedTask.description = description;
        if (!edited) edited = true;
      }
      if (start !== undefined) {
        editedTask.start = new Date(start);
        if (!edited) edited = true;
      }
      if (end !== undefined) {
        editedTask.end = new Date(end);
        if (!edited) edited = true;
      }
      if (toDo !== undefined) {
        editedTask.toDo = toDo;
        editedTask.inProgress = false;
        editedTask.finished = false;
        if (!edited) edited = true;
      }
      if (inProgress !== undefined) {
        editedTask.inProgress = inProgress;
        editedTask.toDo = false;
        editedTask.finished = false;
        if (!edited) edited = true;
      }
      if (finished !== undefined) {
        editedTask.finished = finished;
        editedTask.toDo = false;
        editedTask.inProgress = false;
        if (!edited) edited = true;
      }
      if (!edited) {
        return res.status(400).json({ status: 400, message: "Bad request" });
      }
      await editedTask.save().then(() => {
        res.status(201).json(editedTask);
      });
      console.log(editedTask);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: 500, message: error.message });
    }
  }

  async deleteTask(req, res) {
    const id = req.params.id;
    try {
      let result = await Task.deleteOne({ _id: id });
      if (result.deletedCount === 1) {
        res.sendStatus(204);
      } else {
        res.sendStatus(404);
      }
      console.log(res.statusMessage);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: 500, message: error.message });
    }
  }

  async deleteAllTasks(req, res) {
    try {
      let result = await Task.deleteMany();
      if (result.deletedCount > 0) {
        res.sendStatus(204);
      } else {
        res.sendStatus(404);
      }
      console.log(res.statusMessage);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ status: 500, message: error.message });
    }
  }
}

module.exports = new TaskController();
