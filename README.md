# Node.js Tutorial: From Basics to Advanced

Welcome to the Node.js Tutorial, a comprehensive guide designed to take you from a beginner to an advanced level in Node.js. This tutorial covers all essential topics, providing hands-on examples and best practices to help you master Node.js.

## Table of Contents

1. [Introduction](#introduction)
2. [Setup and Installation](#setup-and-installation)
3. [Basic Concepts](#basic-concepts)
4. [Intermediate Topics](#intermediate-topics)
5. [Advanced Topics](#advanced-topics)
6. [Best Practices](#best-practices)
7. [Resources](#resources)
8. [Contributing](#contributing)
9. [License](#license)

## Introduction

Node.js is a powerful JavaScript runtime built on Chrome's V8 JavaScript engine. It allows you to build scalable network applications quickly and efficiently. This tutorial will guide you through the fundamentals of Node.js, intermediate concepts, and advanced techniques to become proficient in using Node.js for backend development.

## Setup and Installation

### Prerequisites

- Basic understanding of JavaScript
- A code editor (e.g., Visual Studio Code)
- Terminal or command prompt access

### Installation Steps

1. **Download Node.js** from the official [Node.js website](https://nodejs.org/).
2. **Install Node.js** following the instructions for your operating system.
3. **Verify installation**:
    ```sh
    node -v
    npm -v
    ```

## Basic Concepts

### Hello World

Create a simple `hello.js` file:
```js
console.log('Hello, Node.js!');
```

Run the file:
```sh
node hello.js
```

### Modules and Packages

- **Creating a Module**:
    ```js
    // math.js
    function add(a, b) {
        return a + b;
    }
    module.exports = add;
    ```

- **Using a Module**:
    ```js
    // app.js
    const add = require('./math');
    console.log(add(2, 3)); // Output: 5
    ```

### HTTP Server

```js
const http = require('http');
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});
server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});
```

## Intermediate Topics

### Asynchronous Programming

- **Callbacks**:
    ```js
    const fs = require('fs');
    fs.readFile('example.txt', 'utf8', (err, data) => {
        if (err) throw err;
        console.log(data);
    });
    ```

- **Promises**:
    ```js
    const fs = require('fs').promises;
    fs.readFile('example.txt', 'utf8')
        .then(data => console.log(data))
        .catch(err => console.error(err));
    ```

- **Async/Await**:
    ```js
    const fs = require('fs').promises;
    async function readFile() {
        try {
            const data = await fs.readFile('example.txt', 'utf8');
            console.log(data);
        } catch (err) {
            console.error(err);
        }
    }
    readFile();
    ```

### Express.js Framework

- **Installation**:
    ```sh
    npm install express
    ```

- **Basic Server**:
    ```js
    const express = require('express');
    const app = express();
    app.get('/', (req, res) => {
        res.send('Hello, Express!');
    });
    app.listen(3000, () => {
        console.log('Server running at http://localhost:3000/');
    });
    ```

### MongoDB Integration

- **Installation**:
    ```sh
    npm install mongoose
    ```

- **Connecting to MongoDB**:
    ```js
    const mongoose = require('mongoose');
    mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true, useUnifiedTopology: true });
    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', () => {
        console.log('Connected to MongoDB');
    });
    ```

## Advanced Topics

### RESTful APIs

- **Creating a REST API with Express**:
    ```js
    const express = require('express');
    const app = express();
    app.use(express.json());
    
    let items = [{ id: 1, name: 'Item 1' }];

    app.get('/api/items', (req, res) => {
        res.json(items);
    });

    app.post('/api/items', (req, res) => {
        const newItem = { id: items.length + 1, name: req.body.name };
        items.push(newItem);
        res.status(201).json(newItem);
    });

    app.listen(3000, () => {
        console.log('API running at http://localhost:3000/');
    });
    ```

### WebSockets

- **Setting up WebSocket Server**:
    ```js
    const WebSocket = require('ws');
    const server = new WebSocket.Server({ port: 8080 });
    
    server.on('connection', ws => {
        ws.on('message', message => {
            console.log('Received:', message);
        });
        ws.send('Hello! Message from server...');
    });
    ```

### Testing with Mocha and Chai

- **Installation**:
    ```sh
    npm install mocha chai
    ```

- **Basic Test**:
    ```js
    // test.js
    const assert = require('chai').assert;

    describe('Array', () => {
        it('should return -1 when the value is not present', () => {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
    ```

    Run tests:
    ```sh
    npx mocha
    ```

## Best Practices

- **Code Organization**: Keep your code modular and organized.
- **Error Handling**: Implement proper error handling mechanisms.
- **Security**: Use environment variables for sensitive information, validate user inputs, and use secure authentication methods.
- **Testing**: Write tests to ensure your code is reliable and maintainable.
- **Documentation**: Maintain clear and comprehensive documentation.

## Resources

- [Node.js Official Documentation](https://nodejs.org/en/docs/)
- [Express.js Official Documentation](https://expressjs.com/)
- [MongoDB Official Documentation](https://docs.mongodb.com/)
- [Mongoose Documentation](https://mongoosejs.com/docs/guide.html)
- [Mocha Documentation](https://mochajs.org/)
- [Chai Documentation](https://www.chaijs.com/)

## Contributing

We welcome contributions to improve this tutorial. To contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Thank you for following this Node.js tutorial. We hope it helps you build efficient and scalable applications. If you have any questions or feedback, please feel free to contact us.

Happy Coding!
