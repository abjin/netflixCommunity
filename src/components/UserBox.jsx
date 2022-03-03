import React, { useState } from "react";
import UserBox0 from "./UserBox0";
import UserBox1 from "./UserBox1";
function UserBox() {
  const [LogedIn, setLogedIN] = useState(false);
  if (LogedIn == true) {
    return <UserBox1></UserBox1>;
  } else {
    return <UserBox0></UserBox0>;
  }
}

export default UserBox;
