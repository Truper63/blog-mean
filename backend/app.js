const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

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
