const express = require("express");
const router = express.Router();
router.use(express.json()); //
const jwt = require("jsonwebtoken");

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
  return jwt.sign({ email }, process.env.TOKEN_SECRET, { expiresIn: "15m" });
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
        eject();
      } else if (!result) {
        eject();
      } else if (result.password !== password) {
        eject();
      } else if (password === result.password) {
        resolve(email);
      } else {
        eject();
      }
    });
  });

  return await result;
};

const chToken = (req, res, next) => {
  const token = req.headers.token;
  if (!token) {
    console.log("token 없음");
    return res.status(400).json({ message: "EMPTY_TOKEN" });
  }
  jwt.verify(token, process.env.TOKEN_SECRET, (err, result) => {
    if (err) {
      console.log(err);
      res.status(403).json({ message: "INVAILD_TOKEN" });
    }

    req.user = result;
    next();
  });
};

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  chId(email, password)
    .then((result) => {
      const acessToken = generateAcessToken();
      const refreshToken = generateRefreshToken();
      res.status(200).json({ acessToken, refreshToken });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
