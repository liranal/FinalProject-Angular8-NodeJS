var axios = require("axios");
var User = require("../database/schemas/UserSchema");
var Task = require("../database/schemas/TaskSchema");
var Post = require("../database/schemas/PostSchema");
module.exports.LoadUsers = async () => {
  try {
    data = await axios.get("https://jsonplaceholder.typicode.com/users");
    //console.log(data);
    //console.log(data.data);
    let users = data.data;
    let usersData = [];
    users.forEach(user => {
      usersData.push(
        new User({
          UserID: user.id,
          Name: user.name,
          Email: user.email,
          Address: {
            Street: user.address.street,
            Suite: user.address.suite,
            City: user.address.city,
            Zipcode: user.address.zipcode,
            geo: {
              lat: user.address.geo.lat,
              lng: user.address.geo.lng
            }
          },
          Phone: user.address.phone,
          Website: user.address.website,
          Company: {
            Name: user.company.name,
            CatchPhrae: user.company.CatchPhrae,
            BS: user.company.BS
          }
        }).save()
      );
    });
    // console.log(usersData);
  } catch (error) {
    console.log(error);
  }
};

module.exports.LoadTasks = async () => {
  data = await axios.get("https://jsonplaceholder.typicode.com/Todos");
  tasks = data.data;
  let taskData = [];
  tasks.forEach(task => {
    //console.log("Task: " + task.id);
    taskData.push(
      new Task({
        UserID: task.userId,
        TaskID: task.id,
        Title: task.title,
        Completed: task.completed
      }).save()
    );
  });
  //console.log(taskData);
};

module.exports.LoadPosts = async () => {
  data = await axios.get("https://jsonplaceholder.typicode.com/Posts");
  posts = data.data;
  let postsData = [];
  posts.forEach(post => {
    //console.log("Task: " + post.id);
    postsData.push(
      new Post({
        UserID: post.userId,
        PostID: post.id,
        Title: post.title,
        Body: post.body
      }).save()
    );
  });
  // console.log(postsData);
};
