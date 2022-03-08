import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../page/style/PostDoor.css";

function PostDoor({ title, boardId }) {
  const [list, setList] = useState();

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
        <div key={key} className="post">
          <div className="content">{item.title}</div>
          <div className="when">{item.date}</div>
        </div>
      );
    });
  };

  return (
    <div className="PostDoor">
      <div className="name">
        {title}
        {boardId}
      </div>
      {list}
    </div>
  );
}

export default PostDoor;

{
  /* <div className="post">
        <div className="content">list</div>
        <div className="when">방금</div>
      </div>
      <div className="post">
        <div className="content">post2 포스트2</div>
        <div className="when">방금</div>
      </div>
      <div className="post">
        <div className="content">post3 포스트3</div>
        <div className="when">방금</div>
      </div>
      <div className="post">
        <div className="content">post4 포스트4</div>
        <div className="when">방금</div>
      </div> */
}
