import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../page/style/PostDoor.css";

function PostDoor({ title, boardId }) {
  const [list, setList] = useState();
  const navigate = useNavigate();
  const { page } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:3001/main", {
        params: { boardId: boardId, page: page },
      })
      .then((res) => {
        // console.log(res.data.list[0]);
        setList(rendering(res.data.list));
      })
      .catch((err) => {
        console.log("에러 발생(postDoor axios)", err);
      });
  }, []);

  const rendering = (arr) => {
    if (arr.length == 0) return false;
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
        {/* {boardId} */}
      </div>
      {list != false ? list : <div className="noPost">no post</div>}
    </div>
  );
}

export default PostDoor;
