const http = require('http');
const routes = require('./routing');

const serever = http.createServer(routes.handler);

serever.listen(3000);