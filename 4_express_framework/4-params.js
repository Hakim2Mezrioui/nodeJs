const express = require("express");

const app = express();

app.get("/users/:userId", (req, res) => {
    console.log(req.params);

    const {userId} = req.params;
    res.send("user id : " + userId + " detail.");
});

app.listen("8000", () => {
    console.log("the server is running");
});
