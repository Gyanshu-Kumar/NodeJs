//Q - What is NPM?
//A - NPM is a package manager for Node.js packages, or modules. It is a command-line utility for interacting with a said repository that aids in package installation, version management, and dependency management.

// Q - What is module in JS?
// A - Module is Single or Multiple javascript file.
// A module contains logic of the programs.
// A module should be reused or call from anywhre in the program.

//Types of Modules
//1. Self Made / Custom Module -> This Module is Made by self by humans.
//2. Inbuilt Module -> The Module which is inbuilt in javascript. // Eg - http module
//3. External Module -> This type of module are installed externally.

const operations = require("./mymodule.js")

console.log(typeof operations)
console.log(operations)

console.log(operations.add(2, 3))
console.log(operations.prod(5, 6))