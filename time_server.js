var net = require('net');

var PORT = process.argv[2];

var server = net.createServer(function(socket) {
    socket.end(timeFormatted());
});

server.listen(PORT);

function timeFormatted() {
    var time = new Date();
    var year = time.getFullYear();
    var month = fill2(time.getMonth()+1);
    var date = fill2(time.getDate());
    var hours = fill2(time.getHours());
    var minutes = fill2(time.getMinutes());
    return year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + '\n';
}

function fill2(num) {
    return num < 10 ? '0' + num : num;
}
