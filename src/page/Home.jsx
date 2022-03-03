import React from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import HomeLayout from "../components/HomeLayout";

function Home() {
  return (
    <div className="Home">
      <Header></Header>
      <HomeLayout></HomeLayout>
    </div>
  );
}

export default Home;
