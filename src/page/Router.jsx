import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Intro from "../page/Intro";
import Signup from "../page/Signup";
import Login from "../page/Login";
import Home from "../page/Home";
import BoardLayout from "../components/BoardLayout";
import HomeLayout from "../components/HomeLayout";
import BoardBox from "../components/BoardBox";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />}>
          <Route path=":page" element={<HomeLayout />} />
          <Route path=":page" element={<BoardLayout />}>
            <Route path=":board" element={<BoardBox></BoardBox>} />
            <Route path=":board/:post" element={<div>상세 page 입니다.</div>} />
          </Route>
          <Route
            path=":page/:board/:post"
            element={<div>상세 page 입니다.</div>}
          />
        </Route>
        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
