var ws = require('stream').Writable;

rs.pipe(process.stdout);
ws._write = function (chunk, enc, next) {
    console.dir(chunk);
    next();
};

process.stdin.pipe(ws);

