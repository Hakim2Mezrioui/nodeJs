const express = require("express");

const app = express();

const middleware = (req, res, next) => {
    // throw Error("Error handling middleware");
    next("error from middleware 1");
}

app.use(middleware);

app.get("/error-handling-middleware", (req, res) => {
    console.log("error middleware");
    res.send("hello world");
});

app.listen(8000, () => {
    console.log("the server is running");
});

const errorHandlingMiddleware = (error, req, res, next) => {
    console.log(error);
    res.send("message from error handling middleware");
}

app.use(errorHandlingMiddleware);