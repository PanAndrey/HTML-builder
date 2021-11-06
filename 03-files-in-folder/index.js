const path = require("path");
const fs = require("fs");

let dirPath = path.join(__dirname, "/secret-folder");

function getFiles(dirPath) {
  fs.readdir(dirPath, { withFileTypes: true }, (err, files) => {
    files.forEach((file) => {
      if (file.isFile()) {
        fs.stat(path.join(dirPath, file.name), function (err, stats) {
          let fileSize = stats.size;

          console.log(
            file.name.split(".")[0],
            "~~",
            path.extname(file.name).split(".")[1],
            "~~",
            `${fileSize.toString()} b`
          );
        });
      }
    });
  });
}
getFiles(dirPath);
