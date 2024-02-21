const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Post = require("./models/post");

const app = express();

mongoose
  .connect("mongodb+srv:")
  .then(() => {
    console.log("Connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.post("/api/v1/posts", (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  });
  post.save();
  res.status(201).json({
    message: "Post created successfully!",
  });
});

app.get("/api/v1/posts", (req, res, next) => {
  Post.find().then((documents) => {
    console.log(documents);
    res.status(200).json({
      message: "Posts fetched successfully!",
      posts: documents,
    });
  });
});

app.delete("/api/v1/posts/:id", (req, res, next) => {
  const id = req.params.id;
  Post.findByIdAndDelete(id).then((result) => {
    console.log(result);
    res.status(200).json({
      message: "Post deleted successfully!",
    });
  });
});

module.exports = app;
