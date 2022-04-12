const express = require("express");
const router = express.Router();
const mongo = require("./database/database.js");

router.get("/", (req, res) => {
  const { input } = req.query;

  mongo.test
    .findOne({ name: "test" })
    .then((result) => {
      console.log(result);
      res.json(result.content);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "db err occur" });
    });
});

module.exports = router;
