var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.get('/', function(req, res) {
   res.sendFile(__dirname + '/client/index1.html');
});

app.use('/client',express.static(__dirname + '/client'));

 
 
console.log("Server started.");


users = [];
io.on('connection', function(socket) {
   console.log('A user connected');
   socket.on('setUsername', function(data) {
      console.log(data);
      
      if(users.indexOf(data) > -1) {
         socket.emit('userExists', data + ' username is taken! Try some other username.');
      } else {
         users.push(data);
         socket.emit('userSet', {username: data});
      }
   });
   
   socket.on('msg', function(data) {
      //Send message to everyone
      io.sockets.emit('newmsg', data);
   });
    socket.on('disconnect',function(data){
	    //disconnect from the user
	   console.log('!someuser left!! ');
           //console.log(data);
	   //socket.emit('userLeft',data + 'user left!!thank you.');
                  
           //delete users[data];
           socket.emit('userLeft',data + 'user left!!thank you.');
   });

});

http.listen(4242);
   console.log('listening on vps_ip_addr:4242');
