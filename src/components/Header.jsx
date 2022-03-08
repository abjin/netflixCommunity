import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../page/style/Header.css";

function Header(props) {
  const navigate = useNavigate();
  const { page } = useParams();
  const [item, setItem] = useState([
    { name: "홈", id: 0 },
    { name: "시리즈", id: 1 },
    { name: "영화", id: 2 },
    { name: "NEW! 요즘 대세 콘텐츠", id: 3 },
  ]);

  const list = item.map((data, index) => {
    if (data.id == page) {
      return (
        <div key={index} className="selected">
          {data.name}
        </div>
      );
    } else {
      return (
        <div key={index} onClick={() => navigate(`/home/${index}`)}>
          {data.name}
        </div>
      );
    }
  });
  return (
    <div className="Header">
      <div className="header-left">
        <div className="logo">logo</div>
        <div className="name">
          Nerflix <br /> Community
        </div>
      </div>
      <div className="header-middle">{list}</div>
      <div className="header-right">
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Header;
