const http = require('http');
const server = http.createServer(function(request, response){
    response.setHeader("Content-type", "application/json");
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.writeHead(200);
});

server.listen(1234, function(){
    console.log('Listening on port 1234');

})
