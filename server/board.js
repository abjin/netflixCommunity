const express = require("express");
const { post } = require("./database/database");
const router = express.Router();

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
