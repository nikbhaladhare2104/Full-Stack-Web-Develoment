import express from "express";

const port = 3000;

const app = express();


app.listen(port, (req, res) =>{
  console.log("server is running")
});

