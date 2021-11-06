const fs = require("fs");
const path = require("path");

const copyDir = path.join(__dirname, "/files-copy");
const originalDir = path.join(__dirname, "/files");

fs.mkdir(copyDir, { recursive: true }, (err) => {
  if (err) throw err;
});

fs.readdir(originalDir, (err, files) => {
  files.forEach((file) => {
    fs.copyFile(
      path.join(originalDir, file),
      path.join(copyDir, file),
      (err) => {
        if (err) throw err;
      }
    );
  });
});
