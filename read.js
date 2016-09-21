var rs = require('./abc');

var c = 97;

rs._read = function() {
    rs.push(String.fromCharCode(c++));
    if (c > 'z'.charCodeAt(0)) {
           rs.push(null);
   };
};

rs.on('data', function(chunk) {
	//console.log();
    console.log(chunk.toString());
});





