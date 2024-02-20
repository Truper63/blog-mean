const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const Post = require("./models/post");

const app = express();

mongoose
  .connect(
    "mongodb+srv://truper:<password></password>@cluster0.8pssy.mongodb.net/?retryWrites=true&w=majority"
  )
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
  console.log(post);
  res.status(201).json({
    message: "Post created successfully!",
  });
});

app.use("/api/v1/posts", (req, res, next) => {
  const posts = [
    {
      id: "akjheohjflakuj",
      title: "Hello World!",
      content: "This is a sample post.",
    },
    {
      id: "hfuadualdual",
      title: "Hello again World!",
      content: "This is another sample post.",
    },
  ];
  res.status(200).json({
    message: "Posts fetched successfully!",
    posts: posts,
  });
});

module.exports = app;
