// const eventemitter = require("node:events");
// const emitter = new eventemitter(); // ✅ This is the fixed line

// emitter.on("greet", function (name) {
//   console.log(`hello, ${name}`);
// });

// emitter.emit("greet", "AKRAV");

// require("./event"); // ✅ This is okay IF event.js exists

const eventtemitter = require("node:events");
const emitter = new eventtemitter();
emitter.on("selam", function (name) {
  console.log(`selam, ${name}`);
});
emitter.emit("selam", "AKRAV");
