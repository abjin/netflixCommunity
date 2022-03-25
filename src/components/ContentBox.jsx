import React from "react";
import "../page/style/ContentBox.css";
import { useNavigate } from "react-router-dom";

function ContentBox({ data }) {
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(`${data.id}`);
  };
  return (
    <div className="Post" onClick={onClickHandler}>
      <div className="post-title">{data.title}</div>
      <div className="post-content">{data.content}</div>
      <div className="post-etc">
        <div className="etc-left">
          <div className="post-when">{data.date}</div>
          <div className="post-name">{data.writer}</div>
        </div>
        <div className="etc-right">
          <div className="like">like {data.likes}</div>
          <div className="comment">comment {data.comments.length}</div>
        </div>
      </div>
    </div>
  );
}

export default ContentBox;
