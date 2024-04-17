const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const name = 'hakim';
    res.render("home.ejs", {name});
});

app.listen(8000, () => {
    console.log("the server runing");
})