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
  const { dept } = req.query;
  student
    .deleteMany({ dept })
    .then(() => {
      res.status(200).json({ message: "the students deleted succesfully" });
    })
    .catch((err) => res.status(500).json({ message: err.message }));
});

app.listen(8000, () => {
  console.log("the server running");
});
