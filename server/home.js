const express = require("express");
const router = express.Router();

router.get("", (req, res) => {
  console.log(req.query.boardId);
  const id = req.query.boardId;
  res.json({
    list: [
      {
        title: `${id} test1`,
        content: `${id}test1 content`,
        date: "3/8",
        board_id: "0",
      },
      {
        title: `${id} test2`,
        content: `${id}test1 content`,
        date: "3/8",
        board_id: "0",
      },
      {
        title: `${id} test3`,
        content: `${id}test1 content`,
        date: "3/8",
        board_id: "0",
      },
      // {
      //   title: `${id} test4`,
      //   content: `${id}test1 content`,
      //   date: "3/8",
      //   board_id: "0",
      // },
    ],
  });
});

module.exports = router;
