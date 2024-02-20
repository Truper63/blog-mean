const express = require("express");

const app = express();

app.use("/api/v1/posts", (req, res, next) => {
  const posts = [
    {
      id: "akjheohjflakuj",
      title: "Hello World!",
      post: "This is a sample post.",
    },
    {
      id: "hfuadualdual",
      title: "Hello again World!",
      post: "This is another sample post.",
    },
  ];
  res.status(200).json({
    message: "Posts fetched successfully!",
    posts: posts,
  });
});

module.exports = app;
