const Post = require("../database/schemas/PostSchema");
const mongoose = require("mongoose");

module.exports.getAllPosts = async () => {
  allPostsData = await Post.find({}, function(err, posts) {
    if (err) {
      return err;
    } else {
      console.log(posts);
      return posts;
    }
  });

  return allPostsData;
};

module.exports.getPostByUserID = async function(id) {
  allPostsData = await Post.find({ UserID: id }, function(err, posts) {
    if (err) {
      return err;
    } else {
      console.log(posts);
      return posts;
    }
  });

  return allPostsData;
};

module.exports.getPostByPostID = async function(id) {
  allPostsData = await Post.findById(id, function(err, posts) {
    if (err) {
      return err;
    } else {
      console.log(posts);
      return posts;
    }
  });

  return allPostsData;
};

module.exports.setPostByID = async function(id, obj) {
  console.log(obj);
  update = await Post.findByIdAndUpdate(id, obj, { upsert: true }, function(
    err
  ) {
    if (err) return "error";
    return { message: "Post updated successfuly" };
  });

  return update;
};

module.exports.addPost = async function(obj) {
  console.log(obj);
  newPost = new Post(obj);
  console.log(newPost);
  return await newPost.save(function(err) {
    if (err) {
      console.log(err);
      return err;
    } else {
      console.log("ADDDEDDD");
      return "Post Added";
    }
  });
};

module.exports.deletePost = async function(id) {
  console.log(id);
  return Post.findOneAndDelete(id);
};
