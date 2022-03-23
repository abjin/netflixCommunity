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

router.get("/", (req, res) => {
  const post_id = req.query.post;
  post.findOne({ id: parseInt(post_id) }, (err, result) => {
    if (err) {
      res.statusMessage = "server err in /post";
      return res.status(500).end();
    }

    return res.status(200).json({ data: result });
  });
});

router.post("/", async (req, res) => {
  const total_post = await count
    .findOne({ name: "total_post" })
    .then((result) => {
      return result.total_post;
    });

  console.log(total_post);

  const data = req.body;
  await post.insertOne({ ...data, id: total_post + 1 }, (err, result) => {
    if (err) console.log(err);
    // console.log(result);
    res.status(200).json({ message: "mongo db insert success" });
  });

  count
    .updateOne({ name: "total_post" }, { $inc: { total_post: 1 } })
    .then()
    .catch((err) => console.log(err));
});

module.exports = router;
