const http = require("http");
const fs = require("fs");
const _=require("lodash");

const server = http.createServer((req, res) => {
  console.log(`${req.url} ${req.method}`);
  //set header content type
  res.setHeader("Content-Type", "text/html");
  // res.write('<h1>Hello, Anil</h1>');
  // res.end();
  let path = "./views/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;
    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;
    case "/about-me":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      break;
    default:
      path += "404.html";
      res.statusCode = 404;
      break;
  }

  //send an html file
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      //res.write(data); //if you need multi lines data to be send
      res.end(data); //if single data is to be send
    }
  });
});

server.listen(3000, "localhost", () => {
  console.log("listening for request on port 3000");
});
