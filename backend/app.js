const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.post("/api/v1/posts", (req, res, next) => {
  const post = req.body;
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
