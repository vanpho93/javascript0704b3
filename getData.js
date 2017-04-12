const request = require('request');
const fs = require('fs');
// request('http://app.nhodalat.com/', function(err, response, body) {
//     console.log(body);
// });

function getList(idList, cb) {
    const url = 'http://app.nhodalat.com/sp_by_type.php?id_type=' + idList;
    request(url, function(err, response, body) {
        cb(body);
    });
}

function write(data, filename, cb) {
    fs.writeFile(filename, data, function(err) {
        cb();
    });
}

getAndSave(4, '4.txt', function() { 
    console.log('DA XONG');
})

// getList(4, function(body) {
//     console.log(body);
// });

// http://app.nhodalat.com/
//http://app.nhodalat.com/sp_by_type.php?id_type=