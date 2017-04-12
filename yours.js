const fs = require('fs');

function read(filename, aFunc) {
    fs.readFile(filename, 'utf8', function(err, data) {
        aFunc(data);
    });
}
// const a = read('data.txt');
// console.log(a);

function onReadFinish(data) {
    console.log('KET QUA: ' + data);
}

read('data.txt', onReadFinish)
// const a = read('data.txt');
// console.log(a);