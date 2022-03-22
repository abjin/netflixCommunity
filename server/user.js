const express = require("express");
const router = express.Router();
router.use(express.json());

const cookieParser = require("cookie-parser");
router.use(cookieParser());

const generateAcessToken = require("./user/jwt.js").generateAcessToken;
const generateRefreshToken = require("./user/jwt.js").generateRefreshToken;
const chToken = require("./user/jwt.js").chToken;
const chId = require("./user/login");

const chSignup = require("./user/signup").chSignup;
const sign = require("./user/signup").sign;

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  chId(email, password)
    .then((result) => {
      const acessToken = generateAcessToken(email);
      const refreshToken = generateRefreshToken(email);
      res.status(200).json({ acessToken, refreshToken }); //
    })
    .catch((err) => res.status(err).json({ messsage: "로그인 " }));
});

router.post("/signup", (req, res) => {
  const { email, password } = req.body;
  chSignup(email, password)
    .then((result) => {
      sign(email, password)
        .then(res.status(200).json({ message: "회원가입성공" }))
        .catch(res.status(500).json({ message: "db err" }));
    })
    .catch((err) => res.status(err).json({ message: "가입 실패" }));
});

router.get("/", chToken, (req, res) => {
  res.status(200).json({ user: req.user });
});

router.post("/refresh", (req, res) => {
  const refreshToken = req.body.refreshToken;
  if (!refreshToken)
    return res.status(401).json({ message: "refreshToken 인증 정보 없음" });

  jwt.verify(refreshToken, process.env.TOKEN_SECRET, (err, result) => {
    if (err)
      return res.status(403).json({ message: "user 정보 받아 올 수 없음." });

    const acessToken = generateAcessToken(result.email);
    res.status(200).json({ acessToken });
  });
});

module.exports = router;
