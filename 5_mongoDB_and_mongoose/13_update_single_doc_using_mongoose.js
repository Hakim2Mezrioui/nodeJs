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

app.put("/update/student", async (req, res, next) => {
  try {
    const { email } = req.query;
    const { dept } = req.body;

    const response = await Student.findOneAndUpdate(
      { email },
      { $set: { dept } },
      { returnDocument: "after" } // after or before
    );

    if (await response) {
      res
        .status(201)
        .json({ message: "The student updated successfully", data: response });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
});

app.put("/update/student/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const { dept } = req.body;

    // const student = await Student.findById(id);
    const student = await Student.findOne({ _id: id });

    console.log(student);

    if (await student) {
      student.dept = dept;
      student.save();
      res
        .status(201)
        .json({ message: "The student updated successfully", data: student });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(8000, () => {
  console.log("the server is running on 8000");
});

/*
* -- note --
* But keep in mind if you use find by ID then you will pass only object ID and if you use find one method,
* then you may pass object ID or email or department or any other property that you have.
*/