const express = require("express");
const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
client
  .connect()
  .then(() => {
    console.log("the connection etablished");
  })
  .catch((err) => console.log(err));

const db = client.db("schoolDB");
const student = db.collection("student");

const app = express();
app.use(express.json());

app.put("/student", (req, res, next) => {
  const { age } = req.query;
  const { dept } = req.body;

  student
    .updateMany(
      { age: parseInt(age) },
      { $set: { dept } },
      { returnDocument: "after" } // returnDocument: "after" | "before"
    )
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => res.status(500).send(err.message));
});

app.listen(8000, () => {
  console.log("the server running");
});