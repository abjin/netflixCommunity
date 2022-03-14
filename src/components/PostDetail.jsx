import React from "react";
import "../page/style/PostDetail.css";
import logo from "../asset/profile.png";
import { date } from "../api/date";
function PostDetail() {
  return (
    <div className="PostDetail">
      <div className="body-container">
        <div className="post-top">
          <img src={logo} className="user-photo" />
          <div className="info-box">
            <div className="user-id">익명</div>
            <div className="time">{date()}</div>
          </div>
        </div>
        <div className="detail-content">
          <div className="detail-title">마인드핏 해석상담 </div>
          <div className="detail-body">할때 줌 내 카메라 켜야되나?</div>
          <div className="detail-etc">
            <div className="detail-like">like 5</div>
            <div className="detail-comment">comment 3</div>
          </div>
        </div>
        <div className="like-btn">공감</div>
      </div>
      <div className="post-comment"></div>
    </div>
  );
}

export default PostDetail;
