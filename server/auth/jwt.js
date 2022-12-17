const jwt = require("jsonwebtoken");
const secretkey = require("../config/secretkey").secretkey;
const option = require("../config/secretkey").option;

module.exports = {
  generateAcessToken: (email) => {
    return jwt.sign({ email: email }, secretkey, option);
  },

  generateRefreshToken: (email) => {
    return jwt.sign({ email }, process.env.TOKEN_SECRET, {
      expiresIn: "180 days",
    });
  },
  chToken: (req, res, next) => {
    const token = req.cookies.acsessToken;
    // const token = "aajjj";

    if (!token) return res.status(400).json({ message: "TOKEN 정보 없음" });

    jwt.verify(token, secretkey, option, (err, result) => {
      if (err) return console.log(err);

      req.user = result;
      next();
    });
  },
};
