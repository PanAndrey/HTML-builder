const path = require("path");
const fs = require("fs");
const process = require("process");

const filePath = path.join(__dirname, "news.txt");
const writeShort = fs.createWriteStream;
