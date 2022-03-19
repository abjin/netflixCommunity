import React, { useState } from "react";
import "../page/style/UserBox1.css";
import { getUser, logout, getToken } from "../api/user";
function UserBox1({ onLogout }) {
  const [email, setEmail] = useState("");
  getUser()
    .then((result) => {
      console.log("get user then function", result.user.email);
      setEmail(result.user.email);
    })
    .catch((err) => console.log("에러", err));
  return (
    <div className="UserBox1">
      <div className="proflie">
        <div className="photo">사진</div>
        <div className="name">{email}</div>
      </div>
      <div className="logout">
        <button
          onClick={() => {
            logout();
            onLogout(false);
          }}
        >
          로그아웃
        </button>
      </div>
    </div>
  );
}

export default UserBox1;
