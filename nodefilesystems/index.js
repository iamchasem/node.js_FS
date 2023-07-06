const fs = require("fs");
const path = require("path");

let fileNames = ["createFile", "readFile", "updateFile", "deleteFile"];
let fileExit = ".js";
let fileTemplate = `const fs = require("fs");

`;

fileNames.forEach((name) => {
  fs.writeFile(
    path.join(__dirname, `./${name}${fileExit}`),
    fileTemplate,
    (err) => {
      if (err) {
        console.error(err);
        console.log(`Failed to write to ${name}${fileExit} X`);
      } else {
      console.error(err);
      console.log(`Failed to write to ${name}${fileExit} !`);
      }
    }
  );
});