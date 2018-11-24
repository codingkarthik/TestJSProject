var http = require('http');

//create a server object:
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'}); // http header
    var url = req.url;
    console.log(url)
    var hello = {'response':'Hello World'}
    if(url ==='/'){
        res.write(JSON.stringify(hello))
        res.end()
    }
    if(url ==='/mul'){
        res.write('<h1>Multiplying </h1>'); //write a response
        res.end(); //end the response
    }

}).listen(3000, function(){
    console.log("server start at port 3000"); //the server object listens on port 3000
});
