import React from "react";
import "../page/style/HomeLayout.css";
import UserBox from "./UserBox";
import RightBox from "./RightBox";
import MainBox from "./MainBox";
function HomeLayout() {
  return (
    <div className="HomeLayout">
      <div className="userBox">
        <UserBox></UserBox>
      </div>
      <div className="mainBox">
        <MainBox></MainBox>
      </div>
      <div className="rightBox">
        <RightBox></RightBox>
      </div>
    </div>
  );
}

export default HomeLayout;
