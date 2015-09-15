//creating a simple server
var http = require('http');
var url = require('url');
var fs = require('fs');

//messages
var messages = ["testing"];
var clients = [];

//create a server
http.createServer( function (request, response){
	fs.readFile ('nodeTest.js', function (err, data){
		response.end(data);
	});
}).listen(9000, 'localhost');

console.log("Server is running");