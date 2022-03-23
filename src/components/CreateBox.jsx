import axios from "axios";
import React, { useState } from "react";
import "../page/style/CreateBox.css";
import inputform from "../api/inputfrom";
import { useNavigate, useParams } from "react-router-dom";

function CreateBox({ cancel }) {
  const { page, board } = useParams();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const navigate = useNavigate();
  //

  //
  const onSubmitHandler = async (title, content, page, boardid) => {
    const data = await inputform(title, content, page, boardid);

    await axios
      .post("http://localhost:3001/post", data, {
        headers: {
          "Content-type": "application/json; charset=utf-8",
        },
      })
      .then((res) => console.log("response 옴"))
      .catch((err) => console.log(err));

    navigate(`/home/${page}`);
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
        <div
          className="submit"
          onClick={(e) => {
            e.preventDefault();
            onSubmitHandler(title, content, page, board);
            // test(e);
          }}
        >
          작성
        </div>
      </div>
    </div>
  );
}

export default CreateBox;
