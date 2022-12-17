const express = require("express");
const cors = require("cors");
const app = express();
const mongo = require("./database/database");

app.use(
  cors({
    origin: true,
    credentials: true, // 크로스 도메인 허용
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
  })
);

mongo.client.connect();

const home = require("./home.js");
const user = require("./user.js");
const post = require("./post.js");
const board = require("./board.js");
const search = require("./search.js");

//dot env 환경 변수
require("dotenv").config();

app.use("/main", home);
app.use("/user", user);
app.use("/post", post);
app.use("/board", board);
app.use("/search", search);

app.listen(3001, () => {
  console.log("listening on ", 3001, "port.");
});
