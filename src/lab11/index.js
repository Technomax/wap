//for core lib like fs, path, http, the ./ path is not required
console.log(__dirname); //returns current directory
console.log(__filename); //returns current directory with file
//adding the require to path
const path = require("path");
console.log(path.dirname("indexs.js")); //return .
console.log(path.dirname("/pratice/index.js")); //return /practice
console.log(path.extname("index.js")); //return .js
const filename = path.join(__dirname, "file.txt");
console.log(filename);
//reding the filesystem
const fs = require("fs");
// console.log(fs.readFileSync(filename, { encoding: "utf-8" }));
//both utf8 or utf-8 accepted over here
//async reading
  fs.readFile(filename, { encoding: "utf-8" }, (err, data) => {
    if (data) {
        fs.writeFileSync(path.join(__dirname, "file2.txt"),data);
    }
    if (err) {
      console.log(err);
    }
  });
//async reading with promise
const util = require("util");
const readFileContent = util.promisify(fs.readFile);
readFileContent(filename, { encoding: "utf-8" })
  .then((data) => {
    fs.writeFileSync('newtest2.txt',data);
  })
  .catch((err) => {
    console.log(err);
  });
//writing to another filename
fs.writeFileSync('newtest.txt',"Hello");
//USING STREAM TO WRITE THE data
const reader=fs.createReadStream(filename,{highWaterMark:64*1024});
const writer=fs.createWriteStream("stream.txt");
reader.on('data',(chunk)=>{
    writer.write(chunk);
})
//writing via pipe
const writerPipe=fs.createWriteStream("streamPipe.txt");
reader.pipe(writerPipe);
//NPM NOTES
//npm -v for version
//npm init for json file initialization
//npm install moment --save [here save is optional]
//npm install will read all dependencies
//semantic version __major__minor(feature update)_fixing
//major will break api
//minor will not break api
//fixing will fix the bugs
//^update anything within same version
//~update patch only within same minor version
//>accept any version higher than current one
//use npm cli to update package-lock.json, do not update manually
//development dependencies do not occur in production
//npm install <package> --save-dev
const url = require('url');
const myURL =
new URL('https://user:pass@sub.host.com:8080/p/a/t/h?course1=nodejs&course2=angular#hash');
let params = myURL.searchParams;
console.log(params); //URLSearchParams { 'course1' => 'nodejs', 'course2' => 'angular' }
console.log(params.get('course1'), params.get('course2'));//nodejs angular

