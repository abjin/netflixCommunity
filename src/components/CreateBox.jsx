import axios from "axios";
import React, { useState } from "react";
import "../page/style/CreateBox.css";
function CreateBox({ cancel }) {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const onSubmitHandler = () => {
    axios
      .post("/board", { title: title, content: content })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="create-box">
      <div className="create-title">
        <input
          type="text"
          name="title"
          placeholder="글 제목"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>
      <div className="create-content">
        <textarea
          name="content"
          placeholder="글 내용&#13;&#10;&#13;&#10;
        -정치 사회 관련 행위 금지&#13;&#10;
        -홍보 및 판매 행위 금지&#13;&#10;
        -욕설 비하 차별 등 불쾌감을 주는 행위 금지"
          onChange={(e) => {
            setContent(e.target.value);
          }}
        ></textarea>
      </div>
      <div className="create-submit">
        <div className="cancel" onClick={() => cancel()}>
          취소
        </div>
        <div className="submit" onClick={onSubmitHandler}>
          작성
        </div>
      </div>
    </div>
  );
}

export default CreateBox;
