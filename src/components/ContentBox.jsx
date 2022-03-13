import React from "react";
import "../page/style/ContentBox.css";
import { date } from "../api/date";
import { useNavigate } from "react-router-dom";

function ContentBox() {
  console.log(date());
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate("0");
  };
  return (
    <div className="post" onClick={onClickHandler}>
      <div className="post-title">광고와 미디어 책</div>
      <div className="post-content">
        시작하는데요! 5학년이고 사립초 재학중이며 토익 브릿지 목표로 하고 있고
      </div>
      <div className="post-etc">
        <div className="etc-left">
          <div className="post-when">{date()}</div>
          <div className="post-name">익명</div>
        </div>
        <div className="etc-right">
          <div className="like">like 3</div>
          <div className="comment">comment 5</div>
        </div>
      </div>
    </div>
  );
}

export default ContentBox;
