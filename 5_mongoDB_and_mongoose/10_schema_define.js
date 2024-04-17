const express = require("express");
const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/schoolDB";
mongoose
  .connect(url)
  .then(() => {
    console.log("the connection etablised");
  })
  .catch((err) => console.log(err.message));

const studentSchema = mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  dept: String,
});

const Student = mongoose.model("student", studentSchema);

const app = express();

app.get("/", (req, res, next) => {
  res.send("welcome");
});

app.listen(8000, () => {
  console.log("the server is running on 8000");
});
