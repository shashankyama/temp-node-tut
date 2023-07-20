const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`Data Received ${name} ${id}`);
});
customEmitter.on("response", () => {
  console.log("other logic");
});

customEmitter.emit("response", "john", 34);
