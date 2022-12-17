const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const post = client.db("post").collection("post");
const count = client.db("count").collection("count");
const test = client.db("test").collection("test");

module.exports = { client, post, count, test };
