import axios from "axios";
import React, { useState } from "react";

function CreateComment({ postId }) {
  const [comment, setComment] = useState();

  const onClickHandler = () => {
    console.log(postId);
    axios
      .post("http://localhost:3001/post/comment", { comment, postId })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const onChangeHandler = (e) => {
    setComment(e.target.value);
  };

  return (
    <div className="comment-create">
      <input
        type="text"
        name="comment"
        className="comment-input"
        placeholder="댓글을 입력하세요."
        onChange={(e) => onChangeHandler(e)}
      />
      <div className="comment-submit" onClick={onClickHandler}>
        제출
      </div>
    </div>
  );
}

export default CreateComment;
