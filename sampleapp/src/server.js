var http = require('http'); // pre-defined
var url = require('url'); // pre-defined
var lodash = require('lodash');  //installed using npm i lodash

var converter = require('./converter'); // project specific module


//client makes http request [ request enscapuslted all info from client,
// response is used to write back to client]
// when client makes a request [ function(req,res)] is executed by a thread
// and sends to callback queue

// http://localhost:1234/add?x=20&y=30
// http://localhost:1234/sub?x=120&y=30


var server = http.createServer((function (request, response) {
    var pathname = url.parse(request.url).pathname;
    var query = url.parse(request.url, true).query;
    response.write("Random" + lodash.random(1,100));
    response.write(" ==> ");
    if(pathname.substring(1) === 'add') {
        response.end(converter.add(parseFloat(query.x),parseFloat(query.y)).toString())
    } else if (pathname.substring(1) === 'sub') {
        response.end(converter.sub(parseFloat(query.x),parseFloat(query.y)).toString())
    }
}));

server.listen(1234, function() {
    console.log("server started!!!")
});

