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

const chSignup = async (email, password) => {
  const result = new Promise((resolve, eject) => {
    collection.findOne({ email: email }, (err, result) => {
      if (err) {
        eject(500); // 서버 err
      } else if (!result) {
        resolve(200); // 가입 정보 없음
      } else if (result.password !== password) {
        eject(409); // 아이디는 존재 비밀 번호 틀림
      } else if (password === result.password) {
        eject(409);
      } else {
        eject(500); //서버 err
      }
    });
  });

  return result;
};

const sign = (email, password) => {
  collection.insertOne({ email: email, password: password }, (err, result) => {
    // if (err) console.log(err);
    // if (result) console.log(result);
  });
};

module.exports = { chSignup, sign };
