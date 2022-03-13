import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../page/style/PostDoor.css";

function PostDoor({ title, boardId }) {
  const [list, setList] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/main", {
        params: { boardId: boardId },
      })
      .then((res) => {
        setList(rendering(res.data.list));
      })
      .catch((err) => {
        console.log("에러 발생bbbbb", err);
      });
  }, []);

  const rendering = (arr) => {
    return arr.map((item, key) => {
      return (
        <div
          key={key}
          className="post"
          onClick={() => navigate(`${boardId}/${item.id}`)}
        >
          <div className="content">{item.title}</div>
          <div className="when">{item.date}</div>
        </div>
      );
    });
  };

  return (
    <div className="PostDoor">
      <div className="name" onClick={() => navigate(`${boardId}`)}>
        {title}
        {boardId}
      </div>
      {list}
    </div>
  );
}

export default PostDoor;
