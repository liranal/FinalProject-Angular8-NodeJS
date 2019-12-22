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

module.exports.getTaskByUserID = async function(id) {
  allTasksData = await Task.find({ UserID: id }, function(err, tasks) {
    if (err) {
      return err;
    } else {
      console.log(tasks);
      return tasks;
    }
  });

  return allTasksData;
};

module.exports.getTaskByTaskID = async function(id) {
  allTasksData = await Task.findById({ TaskID: id }, function(err, tasks) {
    if (err) {
      return err;
    } else {
      console.log(tasks);
      return tasks;
    }
  });

  return allTasksData;
};

module.exports.setTask = async function(userid, obj) {
  console.log(obj);
  update = await Task.findOneAndUpdate(
    { TaskID: obj.TaskID, UserID: userid },
    obj,
    { upsert: true },
    function(err) {
      if (err) return "error";
      return { message: "Task updated successfuly" };
    }
  );

  return update;
};

module.exports.addTask = async function(obj) {
  console.log(obj);
  newTask = new Task(obj);
  console.log(newTask);
  return await newTask.save(function(err) {
    if (err) {
      console.log(err);
      return err;
    } else {
      console.log("ADDDEDDD");
      return "Task Added";
    }
  });
};

module.exports.deleteTask = async function(id) {
  console.log(id);
  return Task.findOneAndDelete({ TaskID: id });
};
