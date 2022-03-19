import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./style/Login.css";
import logo from "../asset/logo.png";
import { setToken } from "../api/user.js";

function Login() {
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
      .post("http://localhost:3001/user/login", data)
      .then((res) => {
        // console.log(res.data.acessToken);
        setToken(res.data.acessToken);
        // localStorage.setItem("acessToken", res.data.acessToken);
        // localStorage.setItem("refreshToken", res.data.refreshToken);
        navigate("/home/0");
      })
      .catch((err) => {
        if (err.response.status === 404) {
          window.alert("가입 정보 없음");
        } else if (err.response.status === 409) {
          window.alert("비밀 번호를 다시 입력 해주세요.");
          // console.log(err.response.data);
        } else {
          window.alert("다시 시도해 주세요.");
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
            type="button"
            value="로그인"
            className="btn"
            onClick={onSubmitHandler}
          />
        </div>
        <div className="signin-box">
          <p>netflix community에 처음이신가요?</p>
          <Link to="/signup">회원가입</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
