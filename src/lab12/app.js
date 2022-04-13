const express = require("express");
const fs = require("fs");
const path = require("path");
const usersRouter = require("./routers/usersRouter");
const productsRouter = require("./routers/productsRouter");
const defaultRouter = require("./routers/defaultRouter");
const mustacheExpress = require("mustache-express");

const app = express();
app.listen(3000, () => {
  console.log("Running express server at port no: 3000");
});

//register file extension mustache
app.engine("html", mustacheExpress());
//register file extension for partials
app.set("view engine", "html");
app.set("views", __dirname + "/views");
// set static folder
app.use(express.static(__dirname + '/assets')); 
//encoding to convert the request body object to javascript object
app.use(express.urlencoded({extended:true}));
app.use("/", defaultRouter);
app.use("/products", productsRouter);
app.use("/users", usersRouter);

app.use('/error',(req,res,next)=>{
  throw new Error("Exception caught");
});

app.use((req, res, next) => {
  res.status(400).sendFile(path.join(__dirname,"views","400.html"));
});

app.use((err, req, res, next) => {
  res.status(500).sendFile(path.join(__dirname,"views","500.html"));
});
