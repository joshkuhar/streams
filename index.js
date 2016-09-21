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

var rf = require('./abc');

rf.push('beeper');
rf.push(null);

rf.pipe(process.stdout);