var http = require("http");
http.createServer(function (request, response)
{
	response.writeHead(200, {'Content-Type': 'Text/plain'});
	response.end('Hello World\n');
}).listen(8081);

// Test Tuan Bui


console.log('Server');
