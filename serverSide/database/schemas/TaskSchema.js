var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TaskSchema = new Schema({
  UserID: Number,
  TaskID: Number,
  Title: String,
  Completed: Boolean
});

module.exports = mongoose.model("Tasks", TaskSchema);
