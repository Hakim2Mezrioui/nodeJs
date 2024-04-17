const express = require("express");

const app = express();

const admin = express.Router();
const student = express.Router();

app.use("/admin", admin);
app.use("/student", student);

admin.get("/home", (req, res, next) => {
    console.log(req.baseUrl);
    console.log(req.originalUrl);
    console.log(req.path);
    res.send("Adming home route.");
});
student.get("/home", (req, res, next) => {
    console.log(req.baseUrl);
    console.log(req.originalUrl);
    console.log(req.path);
    res.send("Student home route.");
});
app.get("/home", (req, res, next) => {
    console.log(req.baseUrl);
    console.log(req.originalUrl);
    console.log(req.path);
    res.send("Common home route.");
});

app.listen("8000", () => {
    console.log("the server runing");
});