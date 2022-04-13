import React, { useState } from "react";
import "./style/Search.css";
import s_logo from "../asset/search_icon.png";
import { useNavigate } from "react-router-dom";
function Search() {
  const navigate = useNavigate();
  const [inputT, setInuptT] = useState("");

  return (
    <div className="Search">
      <div className="Container">
        <div className="logo">Netflix Community</div>
        <div className="inputbox">
          <input
            type="text"
            name="text"
            onChange={(e) => setInuptT(e.target.value)}
          />
          <img
            className="search-submit"
            src={s_logo}
            onClick={() => navigate(`${inputT}`)}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Search;
