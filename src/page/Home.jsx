import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function Home() {
  return (
    <div className="Home">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
}

export default Home;
