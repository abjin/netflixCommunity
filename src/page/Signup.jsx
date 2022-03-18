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
        if (res.status === 409) {
          window.alert("가입 되어 있는 email 입니다.");
        } else if (res.status === 200) {
          localStorage.setItem("token", res.data.token);
          navigate("/home/0");
        }
      })
      .catch((err) => {
        console.log(err);
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
