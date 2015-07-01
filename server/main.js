var path = require('path');
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(
	express.static('client/browser', {
        maxAge:-1,
        setHeaders : function (res, path) {
            res.set("Access-Control-Allow-Origin", "*");
        }
    })
);

io.on('connection', function(socket){
	console.log('a user connected');

	socket.on('event', function(data){
		console.log('event');


	});

	socket.on('disconnect', function(){
		console.log('disconnect');


	});
});

http.listen(3000, function(){
	console.log('listening on *:3000');
});
