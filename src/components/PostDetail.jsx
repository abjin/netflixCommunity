import React, { useEffect, useState } from "react";
import "../page/style/PostDetail.css";
import logo from "../asset/profile.png";
import { resolvePath, useParams } from "react-router-dom";
import axios from "axios";
import CreateComment from "./CreateComment";
import Comment from "./Comment";
import { getUser } from "../api/user";
import { date } from "../api/date";

function PostDetail() {
  const { post } = useParams();
  const [postData, setPostData] = useState("");
  const [commentData, setCommentData] = useState();
  const [create, togleCreate] = useState(false);

  useEffect(() => {
    console.log("useEffect 함수 실행됨 *******");
    load_data();
  }, []);

  useEffect(() => {
    console.log("useEffect 함수 실행됨 *******");
    load_data();
  }, [create]);

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
        return data.map((item) => {
          return <Comment key={item.id} data={item}></Comment>;
        });
      })
      .then((list) => {
        console.log(list);
        setCommentData(list);
      });
  };

  const list = commentData;

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

      {list}

      <CreateComment
        click={async (new_data, comment_id) => {
          setCommentData([
            ...commentData,
            <Comment key={comment_id} data={new_data}></Comment>,
          ]);
          console.log(commentData);
        }}
        postId={postData.id}
      ></CreateComment>

      {create}
    </div>
  );
}

export default PostDetail;
