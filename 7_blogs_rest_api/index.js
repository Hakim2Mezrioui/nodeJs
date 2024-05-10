const http = require("http");
const app = require("./app.js");
const { port } = require("./config/keys.js"); // the port dont work

const server = http.createServer(app);

server.listen(process.env.PORT, () =>
  console.log(`Server is running on port ${process.env.PORT}`)
);
