import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { board_name, bordUrl } from "../api/page_data";
import "../page/style/RightBox.css";

function RightBox() {
  const [best_list, set_best_list] = useState([]);
  const navigate = useNavigate();
  const { page, board, post } = useParams();

  useEffect(async () => {
    await axios
      .get("http://localhost:3001/post/best")
      .then((res) => {
        set_best_list(res.data.best);
      })
      .catch((err) => {
        console.log("right->best ddboard err ");
      });
  }, [page, board, post]);

  const goBord = (bordId, id) => {
    let url = bordUrl(bordId, id);
    navigate(url);
  };
  return (
    <div className="RightBox">
      <div className="best-box">
        <div className="best-box-name">최근 게시물</div>
        {best_list.map((item, idx) => {
          return (
            <div
              className="best-content-box"
              key={idx}
              onClick={() => goBord(item.board_id, item.id)}
            >
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
