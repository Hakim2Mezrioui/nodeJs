const express = require("express");
const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/schoolDB";
mongoose.connect(url);

const studentSchema = mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  dept: String,
});
const Student = mongoose.model("student", studentSchema);

const app = express();
app.use(express.json());

app.post("/student/multiple", async (req, res, next) => {
  try {
    const students = req.body;
    const response = await Student.insertMany(students);

    if (await response) {
      res.status(201).json({ message: "The students created successfully" });
    }
  } catch (error) {
    res.status(500).json({ message: err });
  }
});

app.listen(8000, () => {
  console.log("the server is running on 8000");
});
