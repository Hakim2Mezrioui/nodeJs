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

app.listen(8000, () => {
  console.log("the server is running");
});

