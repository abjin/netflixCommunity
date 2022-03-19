import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style/Login.css";
import logo from "../asset/logo.png";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const onEmailHandler = (e) => {
    setEmail(e.target.value);
  };
  const onPasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const onSubmitHandler = () => {
    let data = {
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:3001/user/signup", data)
      .then((res) => {
        console.log(res.data.message);
        window.alert("회원가입에 성공했습니다. 로그인 페이지로 이동 합니다.");
        navigate("/home/0");
      })
      .catch((err) => {
        if (err.response.status === 409) {
          window.alert("가입 되어 있는 email 입니다.");
        } else {
          window.alert("서버오류 다시 시도해 주세요");
        }
      });
  };
  return (
    <div className="Login">
      <div className="container">
        <div className="first-box">
          <img className="logo" src={logo}></img>
          <div className="desc">지금 netflix community를 시작하세요! </div>
        </div>
        <div className="input-box">
          <input
            type="text"
            name=""
            placeholder="아이디"
            onChange={onEmailHandler}
          />
          <input
            type="password"
            name=""
            placeholder="*******"
            onChange={onPasswordHandler}
          />
          <input
            type="password"
            name=""
            placeholder="*******"
            onChange={onPasswordHandler}
          />
          <input
            type="button"
            value="로그인"
            className="btn"
            onClick={onSubmitHandler}
          />
        </div>
        <div className="signin-box">
          <p>netflix community 아이디가 있으신가요?</p>
          <Link to="/login">로그인</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;
