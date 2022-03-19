import Cookies from "universal-cookie";
import axios from "axios";
const cookie = new Cookies();

export const setToken = (value) => {
  return cookie.set("acsessToken", value, {
    path: "/",
    expiresIn: "15m",
  });
};
export const getToken = () => {
  return cookie.get("acsessToken");
};

export const logout = () => {
  return cookie.remove("acsessToken");
};

export const isLogin = () => {
  if (cookie.get("acsessToken")) return true;
  else return false;
};

export const getUser = async () => {
  const result = new Promise((resolve, reject) => {
    axios
      .get("http://localhost:3001/user", { withCredentials: true })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        reject("err");
      });
  });

  return await result;
};
