const http = require("http");
const app = require("./app.js");
const { port } = require("./config/keys.js");

const server = http.createServer(app);

server.listen(port, () => console.log(`Server is running on port ${process.env.PORT}`));
