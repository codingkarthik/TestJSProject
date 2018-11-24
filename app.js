var handler = require('./handler.js')
var express = require('express');
var app = express();

app.get('/', function(req, res){
    handler.baseHandler(req,res)
});

app.get('/mul', function(req,res){
    handler.mulHander(req,res)
});

app.listen(3000);