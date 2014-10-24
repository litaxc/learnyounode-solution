var http = require('http');

var url = process.argv[2];
var data = http.get(url, function(response) {
    response.on("data", function(data) {
	console.log(data.toString());
    });
});
