const express = require("express");
const UsersModel = require("../models/UsersModel");
const router = express.Router();

router.route("/").get(function(req, res) {
  UsersModel.getAllUsers().then(allUsers => {
    res.json(allUsers);
  });
});

router.route("/:id").get(function(req, res) {
  UsersModel.getUserByID(req.params.id)
    .then(user => {
      res.json(user);
    })
    .catch(err => res.send(err));
});

router.route("/:id").put(function(req, res) {
  console.log(req.body);
  UsersModel.setUserByID(req.params.id, {
    UserID: req.body.UserID,
    Name: req.body.Name,
    Email: req.body.Email,
    Street: req.body.Street,
    Suite: req.body.Suite,
    City: req.body.City,
    Zipcode: req.body.Zipcode,
    lat: req.body.lat,
    lng: req.body.lng,
    Phone: req.body.Phone,
    Website: req.body.Website,
    CompanyName: req.body.CompanyName,
    CatchPhrase: req.body.CatchPhrase,
    BS: req.body.BS
  })
    .then(data => {
      res.json(data);
    })
    .catch(err => res.send(err));
});

router.route("/").post(function(req, res) {
  console.log(req.body);
  response = UsersModel.addUser({
    UserID: req.body.UserID,
    Name: req.body.Name,
    Email: req.body.Email,
    Street: req.body.Street,
    Suite: req.body.Suite,
    City: req.body.City,
    Zipcode: req.body.Zipcode,
    lat: req.body.lat,
    lng: req.body.lng,
    Phone: req.body.Phone,
    Website: req.body.Website,
    CompanyName: req.body.CompanyName,
    CatchPhrase: req.body.CatchPhrase,
    BS: req.body.BS
  })
    .then(data => {
      console.log("ADDED Person" + data);
      res.json(data);
    })
    .catch(err => res.send(err));
});

router.route("/:id").delete(function(req, res) {
  console.log(req.params.id);
  response = UsersModel.deleteUser(req.params.id);
  res.send(response);
});

module.exports = router;
