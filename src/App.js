import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import Intro from "./page/Intro";
import { Link } from "react-router-dom";
import Signup from "./page/Signup";
import Login from "./page/Login";
import Home from "./page/Home";
import Board from "./page/Board";

function App() {
  return (
    <div className="App">
      <Link to />
      <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home/:page" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
