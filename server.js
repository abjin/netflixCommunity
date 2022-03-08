const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());
const home = require("./server/home.js");

app.use("/main", home);

app.listen(3001, () => {
  console.log("listening on ", 3001, "port.");
});
