const express = require('express');

const app = express();

app.get("/example", (req, res, next) => {
    res.send("This is get method");
});

// app.use(express.json())
// app.use(express.text())
app.use(express.raw())

app.post("/example", (req, res, next) => {
    let data = req.body;
    console.log(data.toString());
    res.send("This is post method");
});


app.put("/example", (req, res, next) => {
    res.send("This is put method");
});
app.patch("/example", (req, res, next) => {
    res.send("This is patch method");
});
app.delete("/example", (req, res, next) => {
    res.send("This is delete method");
});

app.listen(8000, () => {
    console.log("The server is running");
});