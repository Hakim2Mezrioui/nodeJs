const cookieParser = require("cookie-parser");
const express = require("express");

const app = express();

// built-in middleware
app.use(express.json());

// third party middleware
app.use(cookieParser());

app.get("/", (req, res) => {
    res.send("welcome to home page");
});

app.listen(8000, () => {
    console.log("the server is running on 8000");
});