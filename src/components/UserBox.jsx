import React, { useState } from "react";
import UserBox0 from "./UserBox0";
import UserBox1 from "./UserBox1";
import { isLogin } from "../api/user";
import { logout } from "../api/user";
function UserBox() {
  const [LogedIn, setLogetIn] = useState(isLogin());
  if (LogedIn === true) {
    return <UserBox1 onLogout={setLogetIn}></UserBox1>;
  } else {
    return <UserBox0></UserBox0>;
  }
}

export default UserBox;
