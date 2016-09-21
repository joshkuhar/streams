var rs = require('./abc');
//var ws = require('./abc');
// var c = 97;

// rs._read = function() {
//     rs.push(String.fromCharCode(c++));
//     if (c > 'z'.charCodeAt(0)) {
//            rs.push(null);
//    };
// };
var c = 97;
rs._read = function () {
    rs.push(String.fromCharCode(c++));
    if (c > 'z'.charCodeAt(0)) rs.push(null);
};
rs.on('data', function(chunk) {
	//console.log();
    console.log(chunk.toString());
});
//rs.pipe(process.stdout);
// ws._write = function (chunk, enc, next) {
//     console.dir(chunk);
//     next();
// };

// process.stdin.pipe(ws);


	