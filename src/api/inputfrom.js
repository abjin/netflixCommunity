import { date } from "./date";
import { getUser } from "./user";

const inputform = async (title, content, page, boardid) => {
  const _user = await getUser();
  const _date = await date();
  const document = {
    page: parseInt(page),
    board_id: parseInt(boardid),
    id: -1,
    title: title,
    content: content,
    writer: _user.email,
    user: _user,
    likes: 0,
    comments: new Array(),
    date: _date,
  };
  return document;
};

export default inputform;
