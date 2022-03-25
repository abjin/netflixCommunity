import React, { useEffect, useState } from "react";
import "../page/style/PostDetail.css";
import logo from "../asset/profile.png";
import { resolvePath, useParams } from "react-router-dom";
import axios from "axios";
import CreateComment from "./CreateComment";
import Comment from "./Comment";
function PostDetail() {
  const { post } = useParams();
  const [postData, setPostData] = useState("");
  const [commentData, setCommentData] = useState();
  const [create, setCreate] = useState(0);

  useEffect(() => {
    load_data();
  }, []);

  const load_data = () => {
    axios
      .get("http://localhost:3001/post", {
        params: { post: post },
      })
      .then((res) => {
        setPostData(res.data.data);
        return res.data.data.comments;
      })
      .catch((err) => {
        console.log(err.response);
      })
      .then((data) => {
        return data.map((item, key) => {
          return <Comment key={key} data={item}></Comment>;
        });
      })
      .then((list) => {
        console.log(list);
        setCommentData(list);
      });
  };

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
            <div className="detail-like">like {postData.likes}</div>
            <div className="detail-comment">
              comment {postData.total_comment}
            </div>
          </div>
        </div>
        <div className="like-btn">공감</div>
      </div>

      {commentData}

      <CreateComment
        click={() => {
          load_data();
          console.log("click 클릭");
        }}
        postId={postData.id}
      ></CreateComment>

      {create}
    </div>
  );
}

export default PostDetail;
