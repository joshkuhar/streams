//var greeting = require('./abc');

//var fs = require('fs');

// var inFile = fs.createReadStream('abc.js');
// inFile.on('data', function(chunk) {
// 	console.log();
//     console.log(chunk.toString());
// });
// 	

// var Readable = require('stream').Readable;
// var rs = new Readable;
// rs.push('beep ');
// rs.push('boop\n');
// rs.push(null);

// rs.pipe(process.stdout);

var rs = require('./abc');

// rs.push('beeper\n');
// rs.push(null);
// rf.on('data', function(chunk){
// 	console.log(chunk.toString);
// })

// var Readable = require('stream').Readable;
// var rs = Readable();

var c = 97;

rs._read = function() {
    rs.push(String.fromCharCode(c++));
    if (c > 'z'.charCodeAt(0)) {
           rs.push(null);
   };
};

//rs.pipe(process.stdout);

rs.on('data', function(chunk) {
	//console.log();
    console.log(chunk.toString());
});

//rs.resume();
