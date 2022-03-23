import React, { useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import "../page/style/Header.css";
import logo from "../asset/logo.png";
function Header() {
  const navigate = useNavigate();
  const { page } = useParams();
  const item = useState([
    { name: "홈", id: 0, go: "0" },
    { name: "시리즈", id: 1, go: "1" },
    { name: "영화", id: 2, go: "2" },
    { name: "NEW! 요즘 대세 콘텐츠", id: 3, go: "3" },
  ]);

  const onClickHandler = (e) => {
    for (let i = 0; i < 4; i++) {
      document.getElementsByClassName("item")[i].style =
        "color:black; border-bottom: none";
    }

    e.target.style = "color: #c62917;; border-bottom: #c62917 3px solid";
  };
  return (
    <div className="Header">
      <div
        className="header-left"
        onClick={() => {
          for (let i = 0; i < 4; i++) {
            document.getElementsByClassName("item")[i].style =
              "color:black; border-bottom: none";
          }

          document.getElementsByClassName("item")[0].style =
            "color: #c62917;; border-bottom: #c62917 3px solid";
          navigate("/home/0");
        }}
      >
        <img className="logo" src={logo}></img>
        <div className="name">
          Nerflix <br /> Community
        </div>
      </div>
      <div className="header-middle">
        <div
          className="item item0"
          onClick={(e) => {
            navigate("0");
            onClickHandler(e);
          }}
        >
          홈
        </div>
        <div
          className="item"
          onClick={(e) => {
            navigate("1");
            onClickHandler(e);
          }}
        >
          시리즈
        </div>
        <div
          className="item"
          onClick={(e) => {
            navigate("2");
            onClickHandler(e);
          }}
        >
          영화
        </div>
        <div
          className="item"
          onClick={(e) => {
            navigate("3/30");
            onClickHandler(e);
          }}
        >
          NEW! 요즘 대세 콘텐츠
        </div>
      </div>
      <div className="header-right">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Header;
