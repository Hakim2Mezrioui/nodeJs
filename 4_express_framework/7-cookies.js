const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());

app.get("/example", (req, res, next) => {
//   const cookie = req.cookies;
//   console.log(cookie);

//   res.cookie("name", "mezrioui hakim");

    // res.clearCookie("name");

  res.send("got it!");
});

app.listen("8000", () => {
  console.log("The server is runing on 8000 port");
});
