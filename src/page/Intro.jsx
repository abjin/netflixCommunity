import React from "react";
import { useNavigate } from "react-router-dom";
import "./style/intro.css";
import logo from "../asset/logo.png";

function Intro() {
  const navigate = useNavigate();

  const gologin = () => {
    navigate("/login");
  };

  const gosignin = () => {
    navigate("/signup");
  };
  return (
    <div className="Intro">
      <div className="left">
        <p>
          Netflix Community 를 출시하게 되어 기쁩니다! <br /> 사용자는 Netflix
          Community 에 가입하여 영화 및 시리즈의 후기를 남기고 확인 할 수
          있습니다. <br /> 지금 바로 가입하여 관한 정보를 얻고 작품에 관하여
          소통하세요.
        </p>
        <div>Join us</div>
      </div>
      <div className="right">
        <img className="logo" src={logo} />
        <div className="login-btn" onClick={gologin}>
          로그인
        </div>
        <div className="signup-btn" onClick={gosignin}>
          회원가입
        </div>
      </div>
    </div>
  );
}

export default Intro;
