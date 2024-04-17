/* Request Properties */

/*
*    req.baseUrl
*    req.originUrl
*    req.pqth
*    req.hostname
*    req.ip
*    req.method
*    req.protocal
*    req.body
*    req.cookies
*    req.query
*    req.params
*    req.secure
*/

/* Request Properties */

/*
*    req.accepts()
*    req.get()
*/

const express = require("express");

const app = express();
app.get("/", (req, res, next) => {
    console.log("baseUrl: ", req.baseUrl);
    console.log("originalUrl: ", req.originalUrl);
    console.log("path: ", req.path);
    console.log("hostname: ", req.hostname);
    console.log("ip: ", req.ip);
    console.log("method: ", req.method);
    console.log("protocal: ", req.protocal);
    console.log("body: ", req.body);
    console.log("cookies: ", req.cookies);
    console.log("query: ", req.query);
    console.log("params: ", req.params);
    console.log("secure: ", req.secure);
    console.log("accepts(): ", req.accepts());
    console.log("accept ", req.get("accept"));

    res.send("got it!");
});

app.listen("8000", () => {
    console.log("the server runing");
});