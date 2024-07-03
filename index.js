//Q - What is NPM?
//A - NPM is a package manager for Node.js packages, or modules. It is a command-line utility for interacting with a said repository that aids in package installation, version management, and dependency management.

// Q - What is module in JS?
// A - Module is Single or Multiple javascript file.
// A module contains logic of the programs.
// A module should be reused or call from anywhre in the program.

//Types of Modules
//1. Self Made / Custom Module 
//2. Inbuilt Module 
//3. External Module 




const operations = require("./mymodule.js")

console.log(typeof operations)
console.log(operations)

console.log(operations.add(2, 3))
console.log(operations.prod(5, 6))



// Costom Module -> This module is created by the user. to make the code reusable. 
// We can create custom module by using module.exports.
// module.exports is a special object which is included in every JS file in the Node.js application by default.

// Inbuilt Module -> The Module which is inbuilt in javascript. // Eg - http module
// we can use inbuilt module by using require() function.
// Eg - const http = require('http')

// External Module -> This type of module are installed externally.
// we can use external module by using require() function.
// Eg - const express = require('express')
