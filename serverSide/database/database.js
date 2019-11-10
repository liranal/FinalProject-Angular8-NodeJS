const mongoose = require("mongoose");

mongoose.connect("localhost:27017/FinalProject");
mongoose.set("debug", true);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection Error"));
db.once("open", () => console.log("Connected to Final Project database"));
