var http = require('http');
var bl = require('bl');

var urls = process.argv.slice(2);
var datas = [];
var count = 0;

urls.forEach(function(url, index) {
    http.get(url, function(response) {
	response.pipe(bl(function(err, data) {
	    datas[index] = data.toString();
	    count++;

	    if(count === 3) {
		for(var data in datas) {
		    console.log(datas[data]);
		}
	    }
	}));
    });
});


