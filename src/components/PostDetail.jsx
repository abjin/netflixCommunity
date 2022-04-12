import React, { useEffect, useState } from "react";
import "../page/style/PostDetail.css";
import logo from "../asset/profile.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import CreateComment from "./CreateComment";
import Comment from "./Comment";

function PostDetail() {
  const { post } = useParams();
  const [postData, setPostData] = useState("");
  const [commentData, setCommentData] = useState();
  const [LikeChange, setLikeChange] = useState(1);
  const [Like, setLike] = useState();

  useEffect(() => {
    load_data();
    setLikeChange(1);
  }, [post]);

  const load_data = () => {
    axios
      .get("http://localhost:3001/post", {
        params: { post: post },
      })
      .then((res) => {
        setPostData(res.data.data);
        setLike(res.data.data.likes);
        console.log("Like", res.data.data.likes);
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

  const likeHandler = async () => {
    console.log("click like btn");
    if (LikeChange == 1) {
      await axios.post("http://localhost:3001/post/like", {
        like_change: LikeChange,
        id: postData.id,
      });
      setLikeChange(0);
      setLike(Like + 1);
    } else {
      alert("이미 좋아요를 누르셨습니다.");
    }
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
            <div className="detail-like">like {Like}</div>
            <div className="detail-comment">
              comment {postData.total_comment}
            </div>
          </div>
        </div>
        <div className="like-btn" onClick={likeHandler}>
          공감
        </div>
      </div>

      {list}

      <CreateComment
        click={async (new_data, comment_id) => {
          load_data();
          // setCommentData([
          //   ...commentData,
          //   <Comment key={comment_id} data={new_data}></Comment>,
          // ]);
          console.log(commentData);
        }}
        postId={postData.id}
      ></CreateComment>
    </div>
  );
}

export default PostDetail;
