const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    start: {
        type: Date,
        required: true,
    },
    end: {
        type: Date,
    },
    finished: {
        type: Boolean,
        default: false,
    },
})

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
