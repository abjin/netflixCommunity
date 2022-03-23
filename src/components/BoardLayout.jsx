import React from "react";
import "../page/style/BoardLayout.css";
import RightBox from "./RightBox";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { page_data } from "../api/page_data";
function BoardLayout() {
  const { page, board } = useParams();
  const navigate = useNavigate();
  const onClickHandler = () => {
    navigate(`/home/${page}/${board}`);
  };
  return (
    <div className="BoardLayout">
      <div className="title" onClick={onClickHandler}>
        {page_data[page].list[board % 10]}
      </div>
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
