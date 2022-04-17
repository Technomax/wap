const express = require("express");
const cors=require('cors');
const bookRouter=require("./routers/bookRouter");


const app = express();
app.use(cors());
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is up and listen at port:3000");
});



app.use('/books',bookRouter);

app.use((req, res, next) => {
  res.status(404).json({ Message: "API not found..." });
});

app.use((err, req, res, next) => {
  if (err.message === "Record not found.") {
    res.status(200).json({ Error: err.message });
  } else {
    res.status(500).json({ Error: err.message });
  }
});