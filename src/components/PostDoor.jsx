import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import "../page/style/PostDoor.css";

function PostDoor({ title, num }) {
  const { page } = useParams();
  const boardId = 10 * page + num;
  axios.get("/home", {});
  return (
    <div className="PostDoor">
      <div className="name">
        {title}
        {boardId}
      </div>
      <div className="post">
        <div className="content">post1 포스트1</div>
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
      </div>
    </div>
  );
}

export default PostDoor;
