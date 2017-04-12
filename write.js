const fs = require('fs');

function write(data, filename, cb) {
    fs.writeFile(filename, data, function(err) {
        cb();
    });
}

write('CHAO', 'abcd.txt', function(){
    console.log('XONG');
});

// fs.writeFile('abcd.txt', 'XIN CHAO', function(err) {
//     console.log('DA GHI');
// });
