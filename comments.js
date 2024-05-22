// Create web server 
// Create a web server that listens for incoming requests on port 3000 and serves a static file

// Load the http module
var http = require('http');
var fs = require('fs');

// Create a web server
http.createServer(function (req, res) {
    // Set the response HTTP header with HTTP status and Content type
    res.writeHead(200, {'Content-Type': 'text/html'});

    // Send the response body "Hello World"
    fs.readFile('./static.html', function(err, data) {
        res.write(data);
        res.end();
    });
}).listen(3000);

console.log('Server running at http://
