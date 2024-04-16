let fs = require("fs");

// let readStream = fs.createReadStream("./data.txt", {encoding: "utf-8"});

// readStream.on("data", (data) => {
    //     console.log("data read it!");
    //     console.log(data);
    // });
    
let readStream = fs.createReadStream("./data.txt");

let content = [];

readStream.on("data", (data) => {
  content.push(data);
});

readStream.on("end", function () {
  let data = Buffer.concat(content).toString();
  console.log(data);
});
