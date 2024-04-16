const events = require("events");
const fs = require("fs");

const {EventEmitter} = events;

const eventEmitter = new EventEmitter();

eventEmitter.on("event-1", (content) => {
    fs.writeFile("test.txt", content, (error) => {
        if(error) {
            console.log(error);
        }
        console.log("file created with succefully");
    });
});

module.exports = eventEmitter;