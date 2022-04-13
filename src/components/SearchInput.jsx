import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import s_logo from "../asset/search_icon.png";
import "../page/style/SearchInput.css";
function SearchInput() {
  const navigate = useNavigate();
  const [inputT, setInuptT] = useState("");
  return (
    <div className="SearchInput">
      <input
        type="text"
        name="text"
        onChange={(e) => setInuptT(e.target.value)}
      />
      <img
        className="search-submit"
        src={s_logo}
        onClick={() => navigate(`/home/search/${inputT}`)}
      ></img>
    </div>
  );
}

export default SearchInput;
