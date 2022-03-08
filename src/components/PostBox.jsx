import React from "react";
import PostDoor from "./PostDoor";
function PostBox({ list }) {
  console.log(list.list);
  const _list = list.list.map((data, num) => (
    <PostDoor title={data} num={num}></PostDoor>
  ));
  return <>{_list}</>;
}

export default PostBox;
