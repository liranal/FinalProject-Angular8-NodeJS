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
  TaskModel.getTaskByTaskID(req.params.id)
    .then(task => {
      res.json(task);
    })
    .catch(err => res.send(err));
});

router.route("/User/:id").get(function(req, res) {
  TaskModel.getTaskByUserID(req.params.id)
    .then(task => {
      res.json(task);
    })
    .catch(err => res.send(err));
});

router.route("/User/:userid").put(function(req, res) {
  TaskModel.setTask(req.params.userid, {
    TaskID: req.body.TaskID,
    UserID: req.params.userid,
    Title: req.body.Title,
    Completed: req.body.Completed
  })
    .then(data => {
      res.json(data);
    })
    .catch(err => res.send(err));
});

router.route("/").post(function(req, res) {
  res.send(
    TaskModel.addTask({
      UserID: req.body.UserID,
      Title: req.body.Title,
      Completed: req.body.Completed
    })
  );
});

router.route("/:id").delete(function(req, res) {
  console.log(req.params.id);
  response = TaskModel.deleteTask(req.params.id);
  res.send(response);
});

module.exports = router;
