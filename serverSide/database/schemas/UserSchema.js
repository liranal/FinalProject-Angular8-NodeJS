var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  UserID: Number,
  Name: String,
  Email: String,
  Street: String,
  Suite: String,
  City: String,
  Zipcode: String,
  lat: String,
  lng: String,
  Phone: String,
  Website: String,
  CompanyName: String,
  CatchPhrae: String,
  BS: String
});

module.exports = mongoose.model("Users", UserSchema);
