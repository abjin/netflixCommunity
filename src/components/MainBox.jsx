import React from "react";
import "../page/style/MainBox.css";
import { useParams } from "react-router-dom";
import PostBox from "./PostBox";
import { page_data } from "../api/page_data";
function MainBox() {
  const { page } = useParams();
  return (
    <div className="MainBox">
      <PostBox list={page_data[page]}></PostBox>
    </div>
  );
}

export default MainBox;
