import React, { useEffect, useState } from "react";
import "../page/style/UserBox1.css";
import { getUser, logout, getToken } from "../api/user";
import logo from "../asset/profile.png";
function UserBox1({ onLogout }) {
  const [email, setEmail] = useState("");
  useEffect(() => {
    getUser()
      .then((user) => {
        console.log("get user then function", user.email);
        setEmail(user.email);
      })
      .catch((err) => console.log("에러", err));
  }, []);

  return (
    <div className="UserBox1">
      <div className="proflie">
        <img src={logo} className="photo"></img>
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
