const express = require("express");
const PostModel = require("../models/PostsModel");
const router = express.Router();

router.route("/").get(function(req, res) {
  PostModel.getAllPosts()
    .then(allPosts => {
      res.json(allPosts);
    })
    .catch(err => res.send(err));
});

router.route("/:id").get(function(req, res) {
  PostModel.getPostByPostID(req.params.id)
    .then(post => {
      res.json(post);
    })
    .catch(err => res.send(err));
});

router.route("/User/:id").get(function(req, res) {
  PostModel.getPostByUserID(req.params.id)
    .then(post => {
      res.json(post);
    })
    .catch(err => res.send(err));
});

router.route("/:id").put(function(req, res) {
  PostModel.setPostByID(req.params.id, {
    Title: req.body.Title,
    Body: req.body.Body
  })
    .then(data => {
      res.json(data);
    })
    .catch(err => res.send(err));
});

router.route("/").post(function(req, res) {
  PostModel.addPost({
    UserID: req.body.UserID,
    PostID: req.body.PostID,
    Title: req.body.Title,
    Body: req.body.Body
  })
    .then(data => {
      console.log("ADDED Post" + data);
      res.json(data);
    })
    .catch(err => res.send(err));
});

router.route("/:id").delete(function(req, res) {
  console.log(req.params.id);
  response = PostModel.deletePost(req.params.id);
  res.send(response);
});

module.exports = router;
