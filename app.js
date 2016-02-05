var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var logger = require('morgan');

var path = require('path');

app.use(express.static(__dirname, '/public'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/views/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});


http.listen(3000, function(){
	console.log('[Debug] Server started');
})