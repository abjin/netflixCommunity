const express = require("express");
const router = express.Router();
const secretkey = require("./config/secretkey").secretkey;
const option = require("./config/secretkey").option;
router.use(express.json()); //
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
router.use(cookieParser());

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://abjin:abjin@cluster0.wrojn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
const collection = client.db("user").collection("user");

client.connect((err) => {
  if (err) return console.log(err);
});

const generateAcessToken = (email) => {
  return jwt.sign({ email: email }, secretkey, option);
};

const generateRefreshToken = (email) => {
  return jwt.sign({ email }, process.env.TOKEN_SECRET, {
    expiresIn: "180 days",
  });
};

const chId = async (email, password) => {
  const result = new Promise((resolve, eject) => {
    collection.findOne({ email: email }, (err, result) => {
      if (err) {
        eject(500); // 서버 err
      } else if (!result) {
        eject(404); // 가입 정보 없음
      } else if (result.password !== password) {
        eject(409); // 아이디는 존재 비밀 번호 틀림
      } else if (password === result.password) {
        resolve(email);
      } else {
        eject(500); //서버 err
      }
    });
  });

  return await result;
};

const chToken = (req, res, next) => {
  const token = req.cookies.acsessToken;

  if (!token) return res.status(400).json({ message: "TOKEN 정보 없음" });

  jwt.verify(token, secretkey, option, (err, result) => {
    if (err) return console.log(err);

    req.user = result;
    next();
  });
};

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

router.get("/", chToken, (req, res) => {
  res.status(200).json({ user: req.user });
});

module.exports = router;
