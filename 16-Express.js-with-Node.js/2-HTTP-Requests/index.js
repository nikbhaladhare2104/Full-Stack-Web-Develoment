import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Nikhil')
});

app.get("/about", (req, res) => {
  res.send("About Me")   // html type is text 
});

app.get("/contact", (req, res) => {
  res.send("<h1> MY Name is Nikhil, I live in India. </h1>")
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
