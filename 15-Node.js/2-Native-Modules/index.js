const fs = require("fs");

fs.writeFile("data.txt", "Hi I am Nikhil. I am a Programmer.",  (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  }); 

fs.readFile("data.txt","utf8", (err, data) => {    // "utf-8" also works 
    if (err) throw err;
    console.log(data);
  }); 

