const express = require("express");
const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/schoolDB";
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

app.delete("/delete-students", async (req, res, next) => {
  try {
    const { dept } = req.query;

    const response = await Student.deleteMany({ dept });

    res
      .status(200)
      .json({ message: "The students deleted succesfully", data: response });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(8000, () => {
  console.log("the server running on 8000 porte");
});
