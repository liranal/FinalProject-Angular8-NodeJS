const express = require("express");
const User = require("../models/UsersModel");
const router = express.Router();

router.route("/").get(function(req, res) {
  console.log("Users GET function Activated");
  res.send("HELLO");
});

module.exports = router;
