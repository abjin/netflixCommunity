const express = require("express");
const router = express.Router();
router.use(express.json());

//mongo db
const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://abjin:abjin@cluster0.wrojn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  if (err) return console.log(err);
  const collection = client.db("user").collection("user");
  collection.findOne({ email: "test" }, (err, result) => {
    console.log(result.password);
  });
});

// session 방식 login test

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const session = require("express-session");
const { application } = require("express");

router.use(session({ secret: "1106", resave: true, saveUninitialized: false }));
router.use(passport.initialize());
router.use(passport.session());

router.post("/signup", (req, res) => {
  console.log(req.body.email);
  if (req.body.email === "test") {
    console.log("회원 가입 성공시 코드 실행");
  } else {
    console.log("회원 가입 실패시 코드 실행");
  }
});

router.post(
  "/login",
  passport.authenticate("local", {
    // failureRedirect: "/fail",
    failureMessage: true,
  }),
  (req, res) => {
    console.log("server : login 성공");
    res.json({ message: "OK!" });
    // res.redirect("/");
  }
);

//apple coding 복붙 코드

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      session: true,
      passReqToCallback: false, // email, password 말고 다른 filed 검증해보고 싶은 경우 -> true 바꾸고 , 밑에 input_email 전에 인자 하나 추가
    },
    function (input_email, input_password, done) {
      console.log(input_email, input_password);
      const collection = client.db("user").collection("user");
      collection.findOne({ email: input_email }, function (err, result) {
        if (err) return done(err);

        if (!result)
          return done(null, false, { message: "존재하지않는 아이디요" });
        if (input_password == result.password) {
          return done(null, result);
        } else {
          return done(null, false, { message: "비번틀렸어요" });
        }
      });
    }
  )
);

//session data 저장는 code
//session id 정보를 쿠키로 보냄

passport.serializeUser((user, done) => {
  done(null, user.email);
});

//session data 가진 user 찾아주는 code

passport.deserializeUser((email, done) => {
  done(null, {});
});

module.exports = router;
