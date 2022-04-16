const http = require("http");
const fs = require("fs");
const util = require("util");
const server = http.createServer((req, res) => {
    console.log(`${req.url} ${req.method}`);
    res.setHeader("Content-Type", "image/jpg");
    //for text/html output
    // res.setHeader("Content-Type", "text/html");
    // res.write("Hello");
    res.statusCode = 200;
    //method one, async call back
    fs.readFile('./desc.jpg',(err,data)=>{res.end(data);});
    //method two: using pipe
    fs.createReadStream("./desc.jpg").pipe(res);
    //method Three: using sync
    res.end(fs.readFileSync("./source.jpg"));
    //method Four: using promise
    const promise = util.promisify(fs.readFile);
    promise("./source.jpg").then((data) => {
        res.end(data);
      }).catch((err) => res.end(err));
  }).listen(3000);
console.log("Listening...");
