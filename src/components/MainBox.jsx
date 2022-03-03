import React, { useEffect, useState } from "react";
import PostDoor from "./PostDoor";
import "../page/style/MainBox.css";
import { useParams } from "react-router-dom";
import axios from "axios";
function MainBox() {
  const { id } = useParams();
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get(`/home/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("axios 요청 실행 id: ", id);
      });
  }, [id]);
  return (
    <div className="MainBox">
      <PostDoor></PostDoor>
      <PostDoor></PostDoor>
      <PostDoor></PostDoor>
      <PostDoor></PostDoor>
      <PostDoor></PostDoor>
      <PostDoor></PostDoor>
      <PostDoor></PostDoor>
      <PostDoor></PostDoor>
    </div>
  );
}

export default MainBox;
