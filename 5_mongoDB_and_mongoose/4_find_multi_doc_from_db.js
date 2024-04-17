const express = require("express");
const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);
client.connect().then(() => {
  console.log("the connection etablished");
});

const db = client.db("schoolDB");
const student = db.collection("student");

const app = express();

app.get("/students", async (req, res, next) => {
//   student
//     .find({ age: parseInt(23) })
//     .toArray()
//     .then((data) => {
//       res.status(200).send(data);
//     })
//     .catch((err) => res.status(500).send(err.message));

    const dt = await student.find({ age: parseInt(23) });

    const data = await dt.toArray();

    if (!data) {
      res.status(500).send("nothing");
    }
    res.status(200).send(data);
});

app.listen(8000, () => {
  console.log("the server running on 8000");
});
