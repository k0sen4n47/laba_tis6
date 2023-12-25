const http = require('http');

http.createServer(function (request, response) {
    response.end('Hello User!');
}).listen(3000);
