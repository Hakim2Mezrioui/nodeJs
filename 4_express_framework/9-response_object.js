/* Response Properties */

/*
*    res.headersSent
*    res.app
*    res.locals
*/

/* Response Properties */

/*
*    res.cookie()
*    res.clearCookie()
*    res.send()
*    res.json()
*    res.end()
*    res.format()
*    res.render()
*    res.status()
*    res.sendStatus()
*    res.location()
*    res.redirect()
*    res.set()
*    res.get()
*/

const express = require("express");

const app = express();
app.get("/", (req, res, next) => {
    
    // res.end();
    // res.send("got it!");
    // res.json({
    //     name: "hakim",
    //     email: "hakim@gmail.com",
    // })
    // res.redirect("/test");
    // res.location("xyz");
    res.set("title", "express");
    const title = res.get("title");
    console.log(title);
    res.end();
});

app.get("/test", (req, res) => {
    console.log("Test response");
    res.end();
});

app.listen("8000", () => {
    console.log("the server runing");
});