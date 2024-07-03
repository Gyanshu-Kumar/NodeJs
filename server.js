// server -> A server is a computer program or a device that provides functionality for other programs or devices, called "clients". 
//This architecture is called the client–server model. 
//A server can serve multiple clients, and a client can use multiple servers. 
//A client process may run on the same device or may connect over a network to a server on a different device.

//http moduile -> The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.
const http = require('http')

const server = http.createServer((req, res) => { // createServer is a function that creates a server.
    if(req.url == '/Hello'){ // req.url is a property that returns the URL of the request.
        res.end("Hello World")
    }else{
        res.end("you are trying to hit wrong url")
    }
})
server.listen(8000, () => { // listen is a function that listens to the server.
    console.log("Server is Running on Port 8000")

})