const express = require("express");
const router = express.Router();

const bodyparser = require("body-parser");

router.use(bodyparser.urlencoded({ extended: true }));

router.use(express.json());

// //mongodb
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://abjin:abjin@cluster0.wrojn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
const post = client.db("post").collection("post");
const count = client.db("count").collection("count");

client.connect((err) => {
  if (err) return console.log(err);
});
// //mongodb

router.get("", (req, res) => {
  console.log(req.query.boardId);
  const boardId = req.query.boardId;
  // console.log(boardId);
  post
    .find({ board_id: parseInt(boardId) })
    .sort({ id: -1 })
    .limit(10)
    .toArray()
    .then((result) => {
      // console.log(result);
      res.json({ list: result });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
