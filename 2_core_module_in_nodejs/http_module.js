const http = require("http");

let server = http.createServer((req, res) => {
  console.log(req.url);
  //   return res.write("hi ");
  if (req.url === "/") {
    res.write("this is a home page");
  } else if (req.url === "/about") {
    res.write("this is a about page");
  } else if (req.url === "/contact") {
    res.write("this is a contact");
  } else {
    res.write("not found");
  }

  res.end();
});

server.on("connection", () => {
  console.log("new connection");
});

server.listen("3000", () => {
  console.log("the server running");
});
