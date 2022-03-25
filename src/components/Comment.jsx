import React from "react";
import { date } from "../api/date";
import logo from "../asset/profile.png";

function Comment({ data }) {
  return (
    <div className="post-comment">
      <div className="comment-top">
        <img className="comment-img" src={logo} />
        <div className="comment-writer">{data.writer}</div>
      </div>
      <div className="commnet-middle">{data.comment}</div>
      <div className="comment-bottom">{data.date}</div>
    </div>
  );
}

export default Comment;
