const Task = require("../models/taskModel");

// Get all tasks:

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ error: "Internal Server error" });
  }
};

//create a new task

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getTasks,
  createTask,
};
