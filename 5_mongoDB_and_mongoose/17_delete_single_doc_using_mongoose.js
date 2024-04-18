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

app.delete("/delete-student", async (req, res, next) => {
  try {
    const { email } = req.query;

    const response = await Student.findOneAndDelete({email});

    res.status(200).json({ message: "The student deleted succesfully", data: response });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/delete-student/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const response = await Student.findByIdAndDelete(id);

    res.status(200).json({ message: "The student deleted successfully", data: response });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(8000, () => {
  console.log("the server running on 8000 porte");
});