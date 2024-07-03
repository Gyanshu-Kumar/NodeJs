// Read From External File  Eg. input.txt

const fs = require('fs')
// console.log(typeof fs)

//Read in A sync Way
// console.log("Before Starting the Read")
// const content = fs.readFileSync("input.txt")    // readFileSync is a function that reads the file in a synchronous way.
// console.log(content) // This will print the buffer of the file.
// console.log(content.toString()) // This will print the content of the file.
// console.log("Output Content is : "+ content) // Another way to read in string
// console.log("Last Line")

// Read in Async Way
// console.log("Before Starting the Read")
// fs.readFile("input.txt", (err, content) => {
//     if (err) {
//         return console.log(err)
//     } 
//     console.log("Content of the File is " + content)
// })

// console.log("Last Line")




// Write the code to write in external FIle
console.log("Before Starting the Write")
// fs.writeFileSync("output1.txt", "This is the Output File") // This will create a file and write the content in it.

//Asynchronous Way
fs.writeFile("output2.txt", "This is the Output File", (err) => {
    if (err) {
        return console.log(err)
    }
})
console.log("File Written Successfully")

console.log("Last Line")