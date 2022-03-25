import axios from "axios";
import React, { useState } from "react";
import { date } from "../api/date";
import { getUser } from "../api/user";

function CreateComment({ click, postId }) {
  const [comment, setComment] = useState();

  const onClickHandler = async () => {
    const { email: writer } = await getUser();
    const when = date();
    console.log("이메일 ::", writer, when);
    axios
      .post("http://localhost:3001/post/comment", {
        writer,
        comment,
        postId,
        date: when,
      })
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
      <div
        className="comment-submit"
        onClick={() => {
          onClickHandler();
          click();
        }}
      >
        제출
      </div>
    </div>
  );
}

export default CreateComment;
