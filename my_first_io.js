var fs = require('fs');

var filename = process.argv[2];

var fileContent = fs.readFileSync(filename).toString();

console.log(fileContent.split('\n').length-1);
