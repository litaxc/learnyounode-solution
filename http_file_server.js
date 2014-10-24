var http = require('http');
var fs = require('fs');

var PORT = process.argv[2];
var FILE = process.argv[3];

var server = http.createServer(function(request, response) {
    fs.createReadStream(FILE).pipe(response);
});

server.listen(PORT);
