const express = require("express");
const TaskModel = require("../models/TasksModel");
const router = express.Router();

router.route("/").get(function(req, res) {
  TaskModel.getAllTasks()
    .then(allTasks => {
      res.json(allTasks);
    })
    .catch(err => res.send(err));
});

router.route("/:id").get(function(req, res) {
  TaskModel.getTaskByID(req.params.id)
    .then(task => {
      res.json(task);
    })
    .catch(err => res.send(err));
});

router.route("/:id").put(function(req, res) {
  TaskModel.setTaskByID(req.params.id, {
    Title: req.body.Title,
    Completed: req.body.Completed
  })
    .then(data => {
      res.json(data);
    })
    .catch(err => res.send(err));
});

router.route("/").post(function(req, res) {
  TaskModel.addTask({
    UserID: req.body.UserID,
    TaskID: req.body.TaskID,
    Title: req.body.Title,
    Completed: req.body.Completed
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => res.send(err));
});

module.exports = router;
