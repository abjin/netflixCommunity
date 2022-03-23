const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: true,
    credentials: true, // 크로스 도메인 허용
    // methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
  })
);
const home = require("./server/home.js");
const user = require("./server/user.js");
const post = require("./server/post.js");
const board = require("./server/board.js");

//dot env 환경 변수
require("dotenv").config();

app.use("/main", home);
app.use("/user", user);
app.use("/post", post);
app.use("/board", board);

app.listen(3001, () => {
  console.log("listening on ", 3001, "port.");
});
