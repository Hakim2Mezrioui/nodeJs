const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const dotenv = require("dotenv");

const connectMongodb = require("./init/mongodb");
const router = require("./routes/todo");

// environment variable
dotenv.config();


// init app
const app = express();

connectMongodb();

app.use(bodyParser.urlencoded({ extended: true }));

// views
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public/")));

app.use("/", router);

module.exports = app;