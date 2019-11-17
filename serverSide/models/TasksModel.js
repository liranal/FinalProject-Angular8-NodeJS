const Task = require("../database/schemas/TaskSchema");
const mongoose = require("mongoose");
module.exports.getAllTasks = async () => {
  allTasksData = await Task.find({}, function(err, tasks) {
    if (err) {
      return err;
    } else {
      console.log(tasks);
      return tasks;
    }
  });

  return allTasksData;
};

module.exports.getTaskByID = async function(id) {
  allTasksData = await Task.findById(id, function(err, tasks) {
    if (err) {
      return err;
    } else {
      console.log(tasks);
      return tasks;
    }
  });

  return allTasksData;
};

module.exports.setTaskByID = async function(id, obj) {
  console.log(obj);
  update = await Task.findByIdAndUpdate(id, obj, { upsert: true }, function(
    err
  ) {
    if (err) return "error";
    return { message: "Task updated successfuly" };
  });

  return update;
};

module.exports.addTask = async function(obj) {
  console.log(obj);
  newTask = new Task({ obj });
  let insert = await newTask.save(function(err) {
    if (err) {
      return err;
    } else {
      console.log("ADDDEDDD");
      return "Task Added";
    }
  });
  return insert;
};
