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

async function getFiles() {
  try {
    return fsPromises.readdir(components);
  } catch (err) {
    console.error("Error occured while reading directory!", err);
  }
}

async function getComponent(filePath) {
  const data = await fsPromises.readFile(filePath);
  return Buffer.from(data);
}
async function getTemplateData() {
  getFiles().then((files) => {
    files.forEach((file) => {
      let filePath = path.join(components, file);
      getComponent(filePath).then((componentData) => {});
    });
  });
}
