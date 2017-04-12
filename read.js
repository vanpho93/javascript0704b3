const fs = require('fs');

// let a;
// a = fs.readFileSync('data.txt', 'utf8');
// console.log(a);

let a;

fs.readFile('data.txt', 'utf8', function(err, data) {
    a = data;
});

console.log(a);

