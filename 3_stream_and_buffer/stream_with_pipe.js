let fs = require('fs');

let readStream = fs.createReadStream("./data.txt");

readStream.pipe("output.txt");