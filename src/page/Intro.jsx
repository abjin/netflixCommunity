import React from "react";
import { useNavigate } from "react-router-dom";
import "./style/intro.css";

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
          aliquid eveniet reprehenderit, impedit voluptatem tempora dolores a et
          corrupti architecto dolore? Quasi, voluptatum at dolorum cum
          laboriosam facilis itaque corporis?
        </p>
      </div>
      <div className="right">
        <logo className="logo">logo</logo>
        <div className="login-btn" onClick={gologin}>
          로그인
        </div>
        <div className="signin-btn" onClick={gosignin}>
          회원가입
        </div>
      </div>
    </div>
  );
}

export default Intro;
