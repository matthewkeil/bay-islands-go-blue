const http = require('http');
const app = require('./mongo-express.app.js');


const server = http.createServer(app);
server.listen();