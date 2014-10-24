var http = require('http');
var url = require('url');

var PORT = process.argv[2];

var route = {
    '/api/parsetime': function(date) {
	return {
	    hour: date.getHours(),
	    minute: date.getMinutes(),
	    second: date.getSeconds()
	};
    },
    '/api/unixtime': function(date) {
	return {
	    unixtime: date.getTime()
	};
    }
};

function parseURL(URL) {
    return url.parse(URL, true);
}

var server = http.createServer(function(request, response) {
    var parsedURL = parseURL(request.url);
    var date = new Date(parsedURL.query.iso);
    var resource = route[parsedURL.pathname];
    
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify(resource(date)));    
});

server.listen(PORT);
