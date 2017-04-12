const fs = require('fs');

function read(filename, aFunc) {
    fs.readFile(filename, 'utf8', function(err, data) {
        aFunc(data);
    });
}
// const a = read('data.txt');
// console.log(a);
read('data.txt', function(data){
    console.log('KET QUA: ' + data);
})
// const a = read('data.txt');
// console.log(a);