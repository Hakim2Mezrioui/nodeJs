const express = require("express");
const mongoose = require("mongoose");

const app = express();

const url = "mongodb://127.0.0.1:27017/schoolDB";

mongoose
  .connect(url)
  .then(() => {
    console.log("the connection etablished");
  })
  .catch((err) => console.log(err));

app.get("/", (req, res, next) => {
  res.send("welcome there!");
});

app.listen(8000, () => {
  console.log("the server running on 8000");
});
