// 비동기 방식

var fs = require('fs');

fs.readdir('.', function(err, filenames){
    for(var i = 0; i < filenames.length; i++){
        console.log(filenames[i]);
    }
    console.log('ready');
});

console.log('can process next job ...');