import React from "react";
import "../page/style/BoardLayout.css";
import RightBox from "./RightBox";
import { Outlet } from "react-router-dom";
function BoardLayout() {
  return (
    <div className="BoardLayout">
      <div className="title">자유게시판</div>
      <div className="BoardBox">
        <Outlet />
      </div>
      <div className="rightBox">
        <RightBox />
      </div>
      <div style={{ clear: "both" }}></div>
    </div>
  );
}

export default BoardLayout;
