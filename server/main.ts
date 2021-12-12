import http from "http";
import * as socketio from "socket.io";

const server = http.createServer(function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Request-Method", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
  res.setHeader("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }
});

const io = new socketio.Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});
io.on("join", (x) => {
  console.log(x);
});



io.on("connection", async (client) => {

  client.on('send:message', x => io.emit('send:message', x))

  client.on("disconnect", async (reason) => {
    let existingSockets = await io.fetchSockets();

    let socketIds = existingSockets.map((socket) => ({
      username: socket.data.username,
      socketId: socket.id,
    }));

    io.emit("user:list", socketIds);
  });

  client.on("get:usernames", async () => {
    let existingSockets = await io.fetchSockets();

    let socketIds = existingSockets.map((socket) => ({
      username: socket.data.username,
      socketId: socket.id,
    }));

    io.emit("user:list", socketIds);
  })

  client.on("set:username", async (username) => {
    client.data.username = username;

    
  });

});
server.listen(4001);
