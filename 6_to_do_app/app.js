const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");

const connectMongodb = require("./init/mongodb");
const router = require("./routes/todo");


// init app
const app = express();

connectMongodb();

app.use(bodyParser.urlencoded({ extended: true }));

// views
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public/")));

app.use("/", router);

module.exports = app;