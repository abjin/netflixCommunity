const express = require("express");
const router = express.Router();
const mongo = require("../database/database.js");

router.get("/", (req, res) => {
  const { input } = req.query;

  const Condition = [
    {
      $search: {
        index: "titleSearch",
        text: {
          query: input,
          path: "title",
        },
      },
    },
  ];

  mongo.post
    .aggregate(Condition)
    .toArray()
    .then((result) => {
      console.log(result);
      res.json(result).status(200);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "mongodb search err ouccer" });
    });
});

module.exports = router;
