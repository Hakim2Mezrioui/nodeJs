const app = require("./app");

const PORT = process.env.PORT || 8000;

// listen server
app.listen(PORT, () => {
  console.log("the server is running on 8000 port");
});
