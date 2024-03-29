const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const { render } = require("ejs");
const blogRoutes=require("./routes/blogRoutes");

//express application
const app = express();

//connect to mongo db ()remote
// const dbURI='mongodb+srv://technomax:technomax123@cluster0.jbvlj.mongodb.net/note-tuts?retryWrites=true&w=majority';
const dbURI = "mongodb://localhost:27017/node-tuts";
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  //once db connected then listen to the server
  .then((result) => {
    console.log("Database connected.");
    app.listen(3000);
  })
  .catch((err) => console.log(err));

//register view engine
app.set("view engine", "ejs");
// app.set('views','newFolderNameIfOtherThanViews');
//listen for requests
// app.listen(3000);

//middleware and static Files
//with this code we can now add css, media and other in the assets folder that has been declared as static
//to access give it links as "/app.css" not "/assets/app.css"
app.use(express.static("assets"));

//converts incoming body stream to body option. Without this we cannot use req.body
app.use(express.urlencoded({ extended: true }));
// by default express after app.use does not know what to do next. So, next is put to instruct it to move ahead
// app.use((req,res,next) => {
//   console.log("New request made:");
//   console.log("host:"+req.hostname);
//   console.log("path:"+req.path);
//   console.log("method:"+req.method);
//   next();
// });
//morgan for logging
app.use(morgan("dev"));

//mongoose and mongo sandbox routes
// app.get("/add-blog", (req, res) => {
//   const blog = new Blog({
//     title: "Science blog",
//     snippet: "about my science blog",
//     body: "more about my science blog",
//   });
//   blog
//     .save()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/all-blogs", (req, res) => {
//   Blog.find()
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

// app.get("/single-blog", (req, res) => {
//   Blog.findById('625431906244c557d204412f')
//     .then((result) => {
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

app.get("/", (req, res) => {
  // const blogs = [
  //   {
  //     title: "Yoshi finds eggs",
  //     snippet: "Lorum ipsum dolar sit amet consectuture",
  //   },
  //   {
  //     title: "Mario finds stars",
  //     snippet: "Lorum ipsum dolar sit amet consectuture",
  //   },
  //   {
  //     title: "How to defeat browser",
  //     snippet: "Lorum ipsum dolar sit amet consectuture",
  //   },
  // ];
  // res.render("index", { title: "Home", blogs });
  res.redirect("/blogs");
});
app.get("/about", (req, res) => {
  res.render("about", { title: "about" });
});

//route
app.use('/blogs',blogRoutes); //this applies to only when we go to /blogs

app.use((req, res) => {
  res.status(404).render("404", { title: "404" });
});
