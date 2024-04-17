const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.format({
        "text/plain": () => {
            res.send("Plain text response");
        },
        "application/json": () => {
            res.json({name: "hakim", "email": "hakim@gmail.com"});
        },
        "text/html": () => {
            res.render("home.ejs", {name: "hakim"});
        },
        default: () => {
            res.send("nothing matched");
        }
    });
});

app.listen("8000", () => {
    console.log("the server runing");
});