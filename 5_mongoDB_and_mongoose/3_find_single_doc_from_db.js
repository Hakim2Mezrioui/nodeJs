const express = require("express");
const mongodb = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const client = new mongodb.MongoClient(uri);

client
  .connect()
  .then(() => {
    console.log("the connection etablished");
  })
  .catch((err) => console.log(err));

const db = client.db("schoolDB");
const student = db.collection("student");

const app = express();

app.get("/student/:name", async (req, res, next) => {
  const { name } = req.params;
  const data = await student.findOne({ name: name });
  console.log(data);
  res.status(200).send(data);
});

app.get("/student", (req, res, next) => {
  const { name } = req.query;
  console.log(name);

  student
    .findOne({ name: name })
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => console.log(err));
});

app.listen(8000, () => {
  console.log("the server running");
});
