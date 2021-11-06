const fs = require("fs");
const path = require("path");

const styles = path.join(__dirname, "/styles");
const bundle = path.join(__dirname, "/project-dist/bundle.css");

fs.access(bundle, function (error) {
  if (!error) {
    fs.unlink(bundle, (err) => {
      if (err) throw err;
    });
  }
});

fs.readdir(styles, (err, files) => {
  files.forEach((file) => {
    if (file.split(".")[1] === "css") {
      fs.readFile(
        path.join(__dirname, `/styles/${file}`),
        "utf8",
        (err, data) => {
          fs.appendFile(bundle, data, function (err) {
            if (err) throw err;
          });
        }
      );
    }
  });
});
