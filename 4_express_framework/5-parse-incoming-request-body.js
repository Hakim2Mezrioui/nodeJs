const express = require("express");

const app = express();

// app.use(express.json());
// app.use(express.text());
app.use(express.raw());

app.post("/example", (req, res, next) => {
    let data = req.body;
    console.log(data.toString());
    res.send("This is an example response");
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});

