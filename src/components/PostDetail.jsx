import React, { useEffect, useState } from "react";
import "../page/style/PostDetail.css";
import logo from "../asset/profile.png";
import { useParams } from "react-router-dom";
import axios from "axios";
function PostDetail() {
  const { post } = useParams();
  const [postData, setPostData] = useState("");
  const [like, setLike] = useState(0);
  const [comment, setComment] = useState(0);
  useEffect(() => {
    axios
      .get("http://localhost:3001/post", {
        params: { post: post },
      })
      .then((res) => {
        // console.log(res.data);
        setPostData(res.data.data);
        console.log(postData.comments.length);
        setLike(postData.likes);
        setComment(postData.comments.length);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <div className="PostDetail">
      <div className="body-container">
        <div className="post-top">
          <img src={logo} className="user-photo" />
          <div className="info-box">
            <div className="user-id">{postData.writer}</div>
            <div className="time">{postData.date}</div>
          </div>
        </div>
        <div className="detail-content">
          <div className="detail-title">{postData.title}</div>
          <div className="detail-body">{postData.content}</div>
          <div className="detail-etc">
            <div className="detail-like">like {like}</div>
            <div className="detail-comment">comment {comment}</div>
          </div>
        </div>
        <div className="like-btn">공감</div>
      </div>
      <div className="post-comment"></div>
    </div>
  );
}

export default PostDetail;
