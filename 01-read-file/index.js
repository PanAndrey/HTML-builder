const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname, "text.txt");
const ReadStream = fs.createReadStream(filePath, "utf8");

ReadStream.on("data", function (chunk) {
  console.log(chunk);
});
