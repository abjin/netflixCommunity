import axios from "axios";
import React, { useEffect, useState } from "react";
import { page_data, board_name } from "../api/page_data";
import "../page/style/RightBox.css";

function RightBox() {
  const [best_list, set_best_list] = useState();
  useEffect(async () => {
    await axios
      .get("http://localhost:3001/post/best")
      .then((res) => {
        set_best_list(res.data.best);
      })
      .catch((err) => {
        console.log("right->best ddboard err ");
      });

    console.log(best_list[0].title);
  }, []);
  return (
    <div className="RightBox">
      <div className="best-box">
        <div className="best-box-name">최근 게시물</div>
        <div className="best-content-box">
          <div className="best-post-top">{best_list[0].title}</div>
          <div className="best-post-middle">{best_list[0].content}</div>
          <div className="best-post-bottom">
            <div className="best-board">
              {board_name(best_list[0].board_id)}
            </div>
            <div className="best-like">like {best_list[0].likes}</div>
            <div className="best-comment">
              comment {best_list[0].total_comment}
            </div>
            <div className="clear"></div>
          </div>
        </div>
        <div className="best-content-box">
          <div className="best-post-top">{best_list[1].title}</div>
          <div className="best-post-middle">{best_list[1].content}</div>
          <div className="best-post-bottom">
            <div className="best-board">
              {board_name(best_list[1].board_id)}
            </div>
            <div className="best-like">like {best_list[1].likes}</div>
            <div className="best-comment">
              comment {best_list[1].total_comment}
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBox;
