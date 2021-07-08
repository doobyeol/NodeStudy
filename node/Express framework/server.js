var http = require('http'),
    fs = require('fs');

http.createServer(function (req, res) {
    if(req.url.indexOf('html') != -1){ // req.url은 pathname이다. .html 파일인지 확인
        // __dirname : 현재 실행중인 폴더 경로
        fs.readFile(__dirname + '/public/index.html', function (err, data) {
           if(err){
               console.log(err);
           } 
           res.writeHead(200, {'Content-Type' : 'text/html'});
           res.write(data);
           res.end();
        });
    }

    if(req.url.indexOf('.js') != -1){ // .js 파일인지 확인
        fs.readFile(__dirname + '/public/js/script.js'), function (err, data) {
            if(err){
                console.log(err);
            }
            res.writeHead(200, {'Content-Type' : 'text/javascript'});
            res.write(data);
            res.end();
        };
    }

    if(req.url.indexOf('css') != -1){ // .css 파일인지 확인
        fs.readFile(__dirname + '/public/css/style.css', function (err, data) {
            if(err){
                console.log(err);
            }
            res.writeHead(200, {'Content-Type' : 'text/css'});
            res.write(data);
            res.end();
        });
    }

}).listen(8888, '127.0.0.1');
console.log('Server running at http://127.0.0.1:8888/');


var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World!'); 
});

app.listen(8888, function () {
    console.log('Exaple app listening on port 8888!');
});