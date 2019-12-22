const express = require("express");
const router = express.Router();

const User = require("../database/schemas/UserSchema");

module.exports.getAllUsers = async () => {
  allUsersData = await User.find({}, function(err, users) {
    if (err) {
      return err;
    } else {
      console.log(users);
      return users;
    }
  });

  return allUsersData;
};

module.exports.getUserByID = async function(id) {
  UserData = await User.find({ UserID: id }, function(err, user) {
    if (err) {
      return err;
    } else {
      console.log(user);
      return user;
    }
  });

  return UserData;
};

module.exports.setUserByID = async function(id, obj) {
  console.log(obj);
  update = await User.findOneAndUpdate(
    { UserID: id },
    obj,
    { upsert: true },
    function(err) {
      if (err) return "error";
      return { message: "User updated successfuly" };
    }
  );
  return update;
};

module.exports.addUser = async function(obj) {
  console.log(obj);
  newUser = new User(obj);
  console.log("NEW USER: " + newUser);
  return newUser.save(function(err) {
    if (err) {
      console.log(err);
      return err;
    } else {
      console.log("ADDDEDDD");
      return "User Added";
    }
  });
};

module.exports.deleteUser = async function(id) {
  console.log(id);
  return User.findOneAndDelete({ UserID: id });
};
