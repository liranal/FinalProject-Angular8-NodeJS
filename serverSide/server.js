var express = require("express");
var app = express();
const StartModel = require("./models/StartModel");
const bodyParser = require("body-parser");

require("./database/database");
StartModel.LoadUsers();
StartModel.LoadTasks();
StartModel.LoadPosts();
app.use(bodyParser.urlencoded({ extended: true })).use(bodyParser.json());

app.use("/api/users", require("./routes/UsersRoute"));
app.use("/api/tasks", require("./routes/TasksRouter"));

app.listen(8000);
