import React, { useState } from "react";
import { useParams } from "react-router-dom";
import PostDoor from "./PostDoor";
function PostBox({ list }) {
  const { page } = useParams();
  const _list = list.list.map((data, num) => (
    <PostDoor
      title={data}
      boardId={10 * page + num}
      key={10 * page + num}
    ></PostDoor>
  ));
  return <>{_list}</>;
}

export default PostBox;
