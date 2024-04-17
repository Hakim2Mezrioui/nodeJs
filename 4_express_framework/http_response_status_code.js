const express = require("express");

const app = express();

app.get("/", (req, res) => {
//   res.status(200); // 200 - 201 - 400 - 401 - 403 - 404 - 500
//   res.send("Example route");

    // res.status(201).send("created response");
    res.sendStatus(404);
});

app.listen("8000", () => {
  console.log("the server runing");
});
