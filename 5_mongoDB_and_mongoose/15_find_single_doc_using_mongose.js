const express = require("express");
const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017";
mongoose.connect(url).then(() => {
  console.log("The connection etablished");
});

const studentSchema = mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  dept: String,
});
const Student = mongoose.model("student", studentSchema);

const app = express();
app.use(express.json());

app.get("/find-student", async (req, res, next) => {
  try {
    const { email } = req.query;
    console.log(email);

    const student = await Student.findOne({ email });
    if (await student) {
      res.status(200).json({ data: student });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/find-student/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const student = await Student.findById({ _id: id });

    if (await student) {
      res.status(200).json({ data: student });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(8000, () => {
  console.log("the server running on 8000 porte");
});
