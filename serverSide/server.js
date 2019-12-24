var express = require("express");
var app = express();
const StartModel = require("./models/StartModel");
const bodyParser = require("body-parser");

require("./database/database");
// StartModel.LoadUsers();
// StartModel.LoadTasks();
//StartModel.LoadPosts();
var cors = require("cors");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true })).use(bodyParser.json());

app.use("/api/users", require("./routes/UsersRoute"));
app.use("/api/tasks", require("./routes/TasksRouter"));
app.use("/api/posts", require("./routes/PostsRouter"));

app.listen(8000);
