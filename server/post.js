const express = require("express");
const router = express.Router();

const bodyparser = require("body-parser");

router.use(bodyparser.urlencoded({ extended: true }));

router.use(express.json());

// //mongodb
const { MongoClient, ServerApiVersion } = require("mongodb");
const { default: axios } = require("axios");
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
      res.status(500).end();
      console.log("post get err");
    }

    res.status(200).json({ data: result });
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

router.post("/comment", async (req, res) => {
  const { comment, writer, date, postId } = req.body;

  const total_comment = await post.findOne({ id: postId }).then((result) => {
    return result.total_comment;
  });

  console.log("result ::", total_comment);

  post
    .updateMany(
      { id: postId },
      {
        $push: { comments: { comment, writer, date, id: total_comment } },
        $inc: { total_comment: 1 },
      }
    )
    .then((result) => {
      console.log(result);
      res.status(200).json({
        message: "mongodb : update comment success",
        comment_id: total_comment,
      });
    })
    .catch((err) => console.log("?????? ?????? :: ", err));

  // post.updateOne({id : postId}, {$inc : {total_comment : 1}})
  //   .catch(err=>console.log("total_comment update ??????", err))
});

router.get("/best", async (req, res) => {
  console.log("right->best box get ??????");
  const best = await post.find().sort({ id: -1 }).limit(2).toArray();
  res.json({ best });
});

router.post("/like", (req, res) => {
  const { like_change, id: _id } = req.body;
  post
    .updateOne({ id: _id }, { $inc: { likes: like_change } })
    .then((result) => {
      console.log("post like mongodb success");
      res.status(200).end();
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "post like err in mongodb" });
    });
  console.log(like_change, _id);
});

module.exports = router;
