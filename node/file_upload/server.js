// server.js

// Node.js에 기본 내장되어 있는 http 모듈을 로드한다.
// var http = require("http"); // node.js의 내부모듈

// http 모듈의 createServer 메소드를 호출하여 HTTP 서버 생성
// var server = http.createServer();
// server.listen(8888);

// http.createServer(function(request, response){
//     response.writeHead(200, {"Content-Type" : "text/plain"}); // (1)
//     response.write("Hello Doobyeol"); // (2)
//     response.end();
// }).listen(8888);

// callback function
// function onRequest(request, response){
//     console.log("Request received");
//     response.writeHead(200,{"Content-Type": "text/plain"});
//     response.write("Hello World");
//     response.end();
// }

// http.createServer(onRequest).listen(8888);
// console.log("Server has started.");


// var http = require("http"); // node.js의 내부모듈

// function start(){
//     function onRequest(request, response){
//         console.log("Request received.");
//         response.writeHead(200, {"Content-Type" : "text/plain"});
//         response.write("Hello Doo!");
//         response.end();
//     }

//     http.createServer(onRequest).listen(8888);
//     console.log("Server has started.");
// }

// exports.start = start;


// var http = require("http");
// var url = require("url");

// http.createServer(function(request, response){
//     var pathname = url.parse(request.url).pathname;
//     console.log("Path name is " + pathname);

//     var query = url.parse(request.url, true).query;
//     console.log("Request parameter is ", query);

//     response.writeHead(200, {"Content-Type" : "text/html"});
//     response.write(
//         "<h1>Path name is " + pathname + "</h1>" +
//         "<h1>Request parameter is " + JSON.stringify(query) + "</h1>"
//     );
//     response.end();
// }).listen(8888);

// console.log("Server has started");


// var http = require("http");
// var url = require("url");

// function start(){
//     function onRequest(request, response){
//         var pathname = url.parse(request.url).pathname;
//         console.log("Request for " + pathname + " received.");
//         response.writeHead(200, {"Content-Type" : "text/plain"});
//         response.write("Hello Doo!");
//         response.end();
//     }

//     http.createServer(onRequest).listen(8888);
//     console.log("Server has started.");
// }

// exports.start = start;


// server.js

var http = require("http");
var url = require("url");

function start(route, handle){
    function onRequest(request, response){
        var pathname = url.parse(request.url).pathname;
        console.log("Request for " + pathname + " received.");

        // handle은 pathname과 request handler의 관계를 담고 있는 객체
        response.writeHead(200, {"Content-Type" : "text/plain"});
        var content = route(handle, pathname);
        
        response.write(content);
        //response.write("Hello Doo!");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log("Server has started.");
}

exports.start = start;