// var generateName = require('sillyname');
// var sillyName = generateName();


// If we want to import ranther than "require" a module, we have 
// to add "type" in package.json file and add "module" to it 

    // "name": "2.3-npm",
    // "version": "1.0.0",
    // "description": "I am learning about npm",
    // "main": "index.js",
    // "type": "module",
    // .....
// Lets import 

import generateName from "sillyname";
import superheroes from "superheroes";

var sillyName = generateName();
var superHeroName = superheroes.random();


console.log(`My name is ${sillyName} and I am known around the world by ${superHeroName}.`);


