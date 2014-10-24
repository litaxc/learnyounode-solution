var http = require('http');

var url = 'http://example.com';

var get = http.get(url, getCallback);
printProperities(get);

function getCallback(response) {
    printProperities(response);
    var on = response.on('data', onCallback);
    printProperities(on);
}

function onCallback(data) {
    printProperities(data);
}

function printProperities(obj) {
    for(var o in obj) {
	console.log(o.toString());
    }
}
