var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  UserID: Number,
  Name: String,
  Email: String,
  Address: {
    Street: String,
    Suite: String,
    City: String,
    Zipcode: String,
    geo: {
      lat: String,
      lng: String
    }
  },
  Phone: String,
  Website: String,
  Company: {
    Name: String,
    CatchPhrae: String,
    BS: String
  }
});

module.exports = mongoose.model("Users", UserSchema);
