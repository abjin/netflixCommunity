import axios from "axios";
import React, { useState } from "react";
import { date } from "../api/date";
import { getUser } from "../api/user";

function CreateComment({ click, postId }) {
  const [comment, setComment] = useState();

  const onClickHandler = async () => {
    const { email: writer } = await getUser();
    const when = date();
    const data = {
      writer,
      comment,
      postId,
      date: when,
    };
    axios
      .post("http://localhost:3001/post/comment", data)
      .then((res) => {
        console.log("create data response : ", res.data.comment_id);
        click(data, res.data.comment_id);
      })
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
        }}
      >
        제출
      </div>
    </div>
  );
}

export default CreateComment;
