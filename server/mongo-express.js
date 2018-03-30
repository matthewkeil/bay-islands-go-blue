const http = require('http');
const ui = require('./node_modules/mongo-express/app.js');


const server = http.createServer(ui);
server.listen();