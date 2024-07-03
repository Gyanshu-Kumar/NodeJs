// let add = (a, b) => {
//     return a + b;
// }

// let prod = (a, b) => {
//     return a * b;
// }

// // module.exports = add // By Using This Line We can run add function in another file
// module.exports = { // By using this we can export multiple functions
//     add: add,
//     prod: prod
// }


// Another way for exporting
exports.add = (a, b) => {
    return a + b;
}

exportsprod = (a, b) => {
    return a * b;
}