/*
	Event loop concept


 */


setTimeout(function() {
console.log('setTimeout at '+new Date().toTimeString());
}, 1000);
require('fs').readFile('/etc/passwd', function(err, result)
{
console.log(result);
} );

//creating a server and run the application
var http = require('http');

var content = '<html><body><p>Hello World</p><script type=”text/javascript”'+'>alert(“Hi!”);</script></body></html>';
	http.createServer(function (request, response) {
		response.end(content);
	}).listen(8080, 'localhost');

console.log('Server running at http://localhost:8080/.');