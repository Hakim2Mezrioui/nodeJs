const express = require("express");

const app = express();

// app level middleware
const middleware1 = (req, res, next) => {
  console.log("middlewaer1");
  next();
};

const middleware2 = (obj) => {
  return (req, res, next) => {
    console.log("middlewaer2");
    req.email = obj.email,
    req.name = obj.name,
    next();
  };
};


// app.use(middleware1);
// app.use(middleware2({ name: "hakim", email: "hakim@gmail.com" }));

app.get("/app-level-middleware", (req, res) => {
    // console.log(req.name, req.email);
    res.send("hello word");
});



const middleware3 = (res, req, next) => {
    console.log('middleware 3');
    next();
}

app.get("/route-level-middleware", middleware3, (req, res) => {
    res.send("route-level-middleware");
});



app.listen("8000", () => {
  console.log("the server is runing on 8000 port");
});
