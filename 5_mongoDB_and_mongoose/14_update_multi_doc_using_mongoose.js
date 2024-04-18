const express = require("express");
const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/schoolDB";
mongoose
  .connect(url)
  .then(() => {
    console.log("the connection etablished succesfully");
  })
  .catch((err) => console.log(err));

const studentSchema = mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  dept: String,
});
const Student = mongoose.model("student", studentSchema);

const app = express();
app.use(express.json());

app.put("/update/students", async (req, res, next) => {
  try {
    const { dept } = req.query;
    const { age } = req.body;

    // const response = await Student.updateMany({ dept }, { $set: {age: parseInt(age)} });
    const response = await Student.updateMany({ dept }, { age });
    
    if (await response) {
      res
        .status(200)
        .json({ message: "The student updated succesfully", data: response });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(8000, () => {
  console.log("the server running on 8000");
});
