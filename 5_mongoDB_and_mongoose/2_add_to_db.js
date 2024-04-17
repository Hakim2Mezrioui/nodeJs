const express = require("express");
const { MongoClient } = require("mongodb");
// const mongodb = require("mongodb");

const app = express();

app.use(express.json());

const connectionUrl = "mongodb://127.0.0.1:27017";
const client = new MongoClient(connectionUrl);

client
  .connect()
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((err) => console.log(err));

const db = client.db("schoolDB");
const student = db.collection("student");

app.get("/home", (req, res, next) => {
  res.send("hello world");
});

// app.post("/student", (req, res, next) => {
//   student
//     .insertOne({
//       name: "tijani",
//       email: "tijani@gmail.com",
//       age: 23,
//       dept: "cs",
//     })
//     .then(() => {
//       res.status(201).send("the student added successfully");
//     })
//     .catch((err) => console.log(err));
// });

app.post("/student", (req, res, next) => {
    const data = req.body;
    // console.log(data);

    student.insertOne(data).then(() => {
        res.status(201).send("the student added succesfully")
    }).catch(err => res.status(500).send(err.message));
});

app.post("/students", (req, res, next) => {
    const data = req.body;
    console.log(data);

    student.insertMany(data).then(() => {
        res.status(201).send("the students added succesfully")
    }).catch(err => res.status(500).send(err.message));
});

app.listen(8000, () => {
  console.log("the server is running");
});
