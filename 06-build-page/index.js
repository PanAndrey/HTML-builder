const fs = require("fs");
const path = require("path");
const fsPromises = require("fs").promises;

const projectDir = path.join(__dirname, "/project-dist");
const template = path.join(__dirname, "/template.html");
const indexHTML = path.join(projectDir, "/index.html");
const components = path.join(__dirname, "/components");

let componentData = {};

fs.mkdir(projectDir, { recursive: true }, (err) => {});

fs.copyFile(template, indexHTML, (err, files) => {});

let result =
  "Это задание не успел сделать, можеет не терять время, не проверять";
console.log(result);
