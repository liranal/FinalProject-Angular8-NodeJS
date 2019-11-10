var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  UserID: Number,
  PostID: Number,
  Title: String,
  Body: String
});

module.exports = mongoose.model("Posts", PostSchema);
