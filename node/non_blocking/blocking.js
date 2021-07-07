var fs = require('fs');

var filenames = fs.readdirSync('.');

for(var i = 0; i < filenames.length; i++){
    console.log(filenames[i]);
}

console.log('ready');
console.log('can process next job ...');