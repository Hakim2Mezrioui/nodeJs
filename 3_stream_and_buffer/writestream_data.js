let fs = require("fs");

let readStream = fs.createReadStream("./data.txt");
let writeStream = fs.createWriteStream("output.txt");

readStream.on("data", (buffer) => {
  writeStream.write(buffer);
});
