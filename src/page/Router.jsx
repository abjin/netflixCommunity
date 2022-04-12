import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Intro from "../page/Intro";
import Signup from "../page/Signup";
import Login from "../page/Login";
import Home from "../page/Home";
import BoardLayout from "../components/BoardLayout";
import HomeLayout from "../components/HomeLayout";
import BoardBox from "../components/BoardBox";
import PostDetail from "../components/PostDetail";
import Search from "./Search";
import SearchDetail from "./SearchDetail";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />}>
          <Route path="search" element={<Search />} />
          <Route path="search/:input" element={<SearchDetail />} />
          <Route path=":page" element={<HomeLayout />} />
          <Route path=":page" element={<BoardLayout />}>
            <Route path=":board" element={<BoardBox></BoardBox>} />
            <Route path=":board/:post" element={<PostDetail></PostDetail>} />
          </Route>
        </Route>
        <Route path="*" element={<div>not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
