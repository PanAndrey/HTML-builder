const path = require("path");
const fs = require("fs");
const process = require("process");
const readline = require("readline");

const filePath = path.join(__dirname, "output.txt");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("your message: ", (userInput) => {
//   fs.access(filePath, function (error) {
//     if (error) {
//       const file = fs.createWriteStream(filePath);
//       file.write(userInput);
//     } else {
//       file.write(userInput);
//     }
//   });
// });

const events = require("events");

const myEmit = new events.EventEmitter();

myEmit.on("some_event", function (text) {
  console.log(text);
});
myEmit.emit("some_event", "text text text");
