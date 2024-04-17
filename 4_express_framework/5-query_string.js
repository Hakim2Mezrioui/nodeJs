const express = require("express");

const app = express();

app.get("/", (req, res) => {
  console.log(req.query);

  res.send("got it!");
});

app.listen("8000", () => {
  console.log("the server running");
});
