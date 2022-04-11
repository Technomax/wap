const fs = require("fs");
//reading files
fs.readFile("./data/file.txt", (error, data) => {
  if (error) {
    console.log(error);
  }
  console.log(data.toString());
});
//writing Files
fs.writeFile("./data/file.txt", "Hello world", () => {
  console.log("File was written");
});
console.log("Last Line");
//directories
if (!fs.existsSync("./data/assets/")) {
  fs.mkdir("./data/assets/", (error) => {
    if (error) {
      console.log(error);
    }
    console.log("Folder created");
  });
} else {
  fs.rmdir("./data/assets/", (error) => {
    if (error) {
      console.log(error);
    }
    console.log("Folder deleted");
  });
}
//deleting files
if (fs.existsSync("./data/file.txt")) {
  fs.unlink("./data/file.txt", (error) => {
    if (error) {
      console.log(error);
    }
    console.log("file deleted");
  });
}
------------------------------------------------------------------
// npm install -g nodemon
// node init //for json package creation
// modules.export={}
// npm install --save lodash
// npm install express
// npm install ejs
//morgan third party logger middleware logging
//npm install morgan
//npm install mongoose
//for mongo db do not add special character in the password