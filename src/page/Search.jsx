import React from "react";
import "./style/Search.css";
import s_logo from "../asset/search_icon.png";
function Search() {
  return (
    <div className="Search">
      <div className="Container">
        <div className="logo">Netflix Community</div>
        <div className="inputbox">
          <input type="text" name="text" />
          <img className="search-submit" src={s_logo}></img>
        </div>
      </div>
    </div>
  );
}

export default Search;
