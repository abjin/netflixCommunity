import React from "react";
import "../page/style/UserBox1.css";
function UserBox1() {
  return (
    <div className="UserBox1">
      <div className="proflie">
        <div className="photo">사진</div>
        <div className="name">abjin</div>
      </div>
      <div className="logout">
        <button>로그아웃</button>
      </div>
    </div>
  );
}

export default UserBox1;
