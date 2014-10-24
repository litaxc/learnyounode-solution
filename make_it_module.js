var my_module = require('./my_module');

my_module(process.argv[2], process.argv[3], function(err, files) {
    if(err) {
	console.error(err);
    }

    files.forEach(function(file) {
	console.log(file);
    });
});
