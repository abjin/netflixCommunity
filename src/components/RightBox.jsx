import axios from "axios";
import React, { useEffect, useState } from "react";
import { page_data, board_name } from "../api/page_data";
import "../page/style/RightBox.css";

function RightBox() {
  const [best_list, set_best_list] = useState([]);
  useEffect(async () => {
    await axios
      .get("http://localhost:3001/post/best")
      .then((res) => {
        set_best_list(res.data.best);
      })
      .catch((err) => {
        console.log("right->best ddboard err ");
      });
  }, []);
  return (
    <div className="RightBox">
      <div className="best-box">
        <div className="best-box-name">최근 게시물</div>
        {best_list.map((item, idx) => {
          return (
            <div className="best-content-box" key={idx}>
              <div className="best-post-top">{item.title}</div>
              <div className="best-post-middle">{item.content}</div>
              <div className="best-post-bottom">
                <div className="best-board">{board_name(item.board_id)}</div>
                <div className="best-like">like {item.likes}</div>
                <div className="best-comment">comment {item.total_comment}</div>
                <div className="clear"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RightBox;
