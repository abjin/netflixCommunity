const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const app = express();

require("dotenv").config();

app.use(
  cors({
    origin: true,
    credentials: true, // 크로스 도메인 허용
    methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD"],
  })
);

require("./controller")(app);

app.listen(3001, () => {
  console.log("listening on ", 3001, "port.");
});

exports.app = app;
