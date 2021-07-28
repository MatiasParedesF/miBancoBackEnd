const http = require('http');
const app  = require('./app');


var port = process.env.port || 7999;
var host = '127.0.0.1';

http.createServer(app)
.listen(port,host);