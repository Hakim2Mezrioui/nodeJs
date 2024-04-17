/*
*   If you write synchronous code, then express will handle error for us automatically.
*   And if you write asynchronous code, then you have to manually handle the error.
*/

const express = require("express");

const app = express();

app.get("/error-handling", (req, res) => {
    throw new Error("bad request :error");

    // res.send("hello world");
});

const errMiddleware = (error, req, res, next) => {
    // console.log(error.stack);
    console.log(error.message);
    next(error.message);
}

app.use(errMiddleware);

app.listen(8000, () => {
    console.log("the server is running");
});