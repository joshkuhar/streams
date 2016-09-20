//var greeting = require('./abc');
var stream = require('stream');
var fs = require('fs');

var inFile = fs.createReadStream('abc.js');
inFile.on('data', function(chunk) {
	console.log(stream.Readable.read);
    console.log(chunk.toString());
});
	