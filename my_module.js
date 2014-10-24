var fs = require('fs');
var path = require('path');

module.exports = function(directory, filter, callback) {
    fs.readdir(directory, function(err, files) {
	if(err) {
	    return callback(err);
	}

	var filteredFiles = files.filter(function(file) {
	    return path.extname(file) === '.' + filter;
	});

	callback(null, filteredFiles);
    });
};
