var sum = 0;

process.argv.forEach(function(value, index, process) {
    var num = Number(value);
    if(!isNaN(num)) {
	sum += num;
    }
});

console.log(sum);
