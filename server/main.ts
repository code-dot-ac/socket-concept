import http from 'http';
import * as socketio from 'socket.io';

const server = http.createServer(function(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
	res.setHeader('Access-Control-Allow-Headers', '*');
	if ( req.method === 'OPTIONS' ) {
		res.writeHead(200);
		res.end();
		return;
	}
});

const io = new socketio.Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
})
// const io = require('socket.io')(server, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST"]
//   }
// });
io.on('connection', client => {

  
  let roomName = 'testroom';

  client.join(roomName);

  client.emit('testroom', 'hello')
  client.to(roomName).emit("user has joined", client.id);

  // client.to('testroom').

  // client.on('message', d)
  client.on('event', data => {
    console.log('event has happened', data)
  });
  client.on('disconnect', () => {
    console.log('disconnect has happened')
  });
});
server.listen(4000);