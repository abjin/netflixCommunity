import React from "react";
import { useNavigate } from "react-router-dom";
import "../page/style/UserBox0.css";
function UserBox0() {
  const navigate = useNavigate();
  return (
    <div className="UserBox0">
      <div
        className="login"
        onClick={() => {
          navigate("/login");
        }}
      >
        로그인
      </div>
      <div
        className="signup"
        onClick={() => {
          navigate("/signup");
        }}
      >
        회원가입
      </div>
    </div>
  );
}

export default UserBox0;
