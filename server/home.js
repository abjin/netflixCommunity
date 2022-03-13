const express = require("express");
const router = express.Router();

router.get("", (req, res) => {
  console.log(req.query.boardId);
  const id = req.query.boardId;
  res.json({
    list: [
      {
        title: `test1    ${id} `,
        content: `${id}test1 content`,
        date: "3/8",
        board_id: "0",
        id: 0,
      },
      {
        title: `test2    ${id} `,
        content: `${id}test1 content`,
        date: "3/8",
        board_id: "0",
        id: 1,
      },
      {
        title: `test3    ${id} `,
        content: `${id}test1 content`,
        date: "3/8",
        board_id: "0",
        id: 2,
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
