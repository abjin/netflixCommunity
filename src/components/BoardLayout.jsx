import React from "react";
import "../page/style/BoardLayout.css";
import RightBox from "./RightBox";
import { Outlet, useParams } from "react-router-dom";
import { page_data } from "../api/page_data";
function BoardLayout() {
  const { page, board } = useParams();
  return (
    <div className="BoardLayout">
      <div className="title">{page_data[page].list[board % 10]}</div>
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
