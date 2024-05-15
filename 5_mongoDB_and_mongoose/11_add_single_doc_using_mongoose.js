const express = require("express");
const mongoose = require("mongoose");

const url = "mongodb://127.0.0.1:27017/schoolDB";
mongoose
  .connect(url)
  .then(() => {
    console.log("the connection etablished");
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

app.post("/student/single", async (req, res, next) => {
  try {
    const { name, email, age, dept, address } = req.body;

    // const newStudent = new Student({name, email, age, dept, address});
    // await newStudent.save();

    const newStudent = await Student.create({ name, email, age, dept });
    if(await newStudent) {
        res.status("201").json({ message: "the studnet created successfully" });
    }

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.listen(8000, () => {
  console.log("the server running on 8000 port");
});