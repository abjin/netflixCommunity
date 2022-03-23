import React, { useEffect, useState } from "react";
import ContentBox from "./ContentBox";
import CreateBox from "./CreateBox";
import "../page/style/BoardBox.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function BoardBox() {
  const { board } = useParams();
  const [inputToggle, SetInputToggle] = useState(false);
  const [list, setList] = useState(null);
  useEffect(async () => {
    const data = await axios
      .get("http://localhost:3001/board", {
        params: { boardId: board },
      })
      .then((res) => {
        return res.data.list;
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data);

    setList(
      data.map((item, key) => {
        return <ContentBox key={item.id} data={item}></ContentBox>;
      })
    );
  }, []);

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
      <div className="content-box">{list}</div>
    </>
  );
}

export default BoardBox;
