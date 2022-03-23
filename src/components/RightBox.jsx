import React from "react";
import "../page/style/RightBox.css";

function RightBox() {
  return (
    <div className="RightBox">
      <div className="best-box">
        <div className="best-box-name">최근 게시물</div>
        <div className="best-content-box">
          <div className="best-post-top">best post title1</div>
          <div className="best-post-middle">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, ea
            illum quos velit odio nisi officiis accusamus perspiciatis dolorem
            laborum iste quod est maxime rerum tempore ipsa eaque adipisci
            animi.
          </div>
          <div className="best-post-bottom">
            <div className="best-board">한국인의 top 10 콘텐츠</div>
            <div className="best-like">like 1</div>
            <div className="best-comment">comment 0</div>
            <div className="clear"></div>
          </div>
        </div>
        <div className="best-content-box">
          <div className="best-post-top">best post title1</div>
          <div className="best-post-middle">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi, ea
            illum quos velit odio nisi officiis accusamus perspiciatis dolorem
            laborum iste quod est maxime rerum tempore ipsa eaque adipisci
            animi.
          </div>
          <div className="best-post-bottom">
            <div className="best-board">한국인의 top 10 콘텐츠</div>
            <div className="best-like">like 1</div>
            <div className="best-comment">comment 0</div>
            <div className="clear"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBox;
