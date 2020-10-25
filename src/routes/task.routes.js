const express = require("express");
const Task = require("../models/task");
const router = express.Router();

//API REST
router.get("/", async (req, res) => {
  const tasks = await Task.find();
  console.log(tasks);
  res.json(tasks);
});

router.get("/:id", async (req, res) => {
  const task = await Task.findById(req.params.id);
  console.log(task);
  res.json(task);
})

router.post("/", async (req, res) => {
  const { title, description } = req.body;
  const task = new Task({ title, description });
  await task.save();
  res.json({
    status: "Taks saved",
  });
});

router.put("/:id", async (req, res) => {
  const { title, description } = req.body;
  const newTask = { title, description };
  await Task.findByIdAndUpdate(req.params.id, newTask);
  res.json({
    status: "Taks updated",
  });
});

router.delete("/:id", async (req, res) => {
  await Task.findByIdAndDelete(req.params.id);
  res.json({
    status: "Taks deleted",
  });
});

module.exports = router;
