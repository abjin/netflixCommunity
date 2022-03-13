import React, { useState } from "react";
import ContentBox from "./ContentBox";
import CreateBox from "./CreateBox";
import "../page/style/BoardBox.css";

function BoardBox() {
  const [inputToggle, SetInputToggle] = useState(false);
  const inputCancel = () => {
    SetInputToggle(false);
  };
  return (
    <>
      {inputToggle === false ? (
        <div
          className="input-basic"
          onClick={() => {
            SetInputToggle(true);
          }}
        >
          새글을 작성해주세요
        </div>
      ) : (
        <CreateBox cancel={inputCancel}></CreateBox>
      )}
      <div className="content-box">
        <ContentBox></ContentBox>
      </div>
    </>
  );
}

export default BoardBox;
