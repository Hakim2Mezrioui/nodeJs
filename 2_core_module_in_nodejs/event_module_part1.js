const events = require("events");
const { EventEmitter } = events;

const eventEmitter = new EventEmitter();

eventEmitter.on("event-1", (param1, obj) => {
  console.log("hello world");
  console.log(param1);
  console.log(obj);
});

eventEmitter.emit("event-1", "hakim", {one: "hi there", name: "node js", "is-good": true});
