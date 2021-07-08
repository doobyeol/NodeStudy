// server.js
var formidable = require("formidable"),
    http = require('http'),
    util = require('util');

http.createServer(function name(params) {
    if(req.url == '/upload' && req.method.toLowerCase() == 'post'){
        // parse a file upload
        var form = new formidable.IncomingForm();

        form.parse(req, function(err, fields, files) {
            
        });
        return;
    }
}).listen(8888);