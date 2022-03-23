import React, { useEffect, useState } from "react";
import "../page/style/PostDetail.css";
import logo from "../asset/profile.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import { date } from "../api/date";

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
      {/* comment */}
      <div className="post-comment">
        <div className="comment-top">
          <img className="comment-img" src={logo} />
          <div className="comment-writer">admin</div>
        </div>
        <div className="commnet-middle">
          좋아요 눌러서 당사자가 보게 해주세요 부탁드립니다 Lorem ipsum dolor
          sit, amet consectetur adipisicing elit. Doloremque sint quos
          distinctio labore similique expedita tempora, inventore molestias
          dolorum facere cumque ad odit, iste optio et perspiciatis modi, fuga
          cum?
        </div>
        <div className="comment-bottom">{date()}</div>
      </div>
      {/* comment end */}
      <div className="comment-create">
        <input
          type="text"
          name="comment"
          className="comment-input"
          placeholder="댓글을 입력하세요."
        />
        <div className="comment-submit">제출</div>
      </div>
    </div>
  );
}

export default PostDetail;
