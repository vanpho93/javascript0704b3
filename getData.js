const request = require('request');

request('http://app.nhodalat.com/', function(err, response, body) {
    console.log(body);
});

// http://app.nhodalat.com/
//http://app.nhodalat.com/sp_by_type.php?id_type=4