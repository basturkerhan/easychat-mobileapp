const app = require('express')();
const server = require('http').createServer(app);

let connectionRoomCount = {};

const io = require('socket.io')(server, {
  cors: {
    origin: '*',
  },
});

io.on('connection', socket => {
  socket.on('connection-room', ({roomId}) => {
    socket.join(roomId);

    connectionRoomCount[roomId] =
      typeof connectionRoomCount[roomId] === 'undefined'
        ? 1
        : connectionRoomCount[roomId] + 1;

    io.to(roomId).emit('connection-room-view', {
      count: connectionRoomCount[roomId],
    });
  });

  socket.on('leave-room', ({roomId}) => {
    socket.leave(roomId);
    connectionRoomCount[roomId] =
      typeof connectionRoomCount[roomId] === 'undefined'
        ? 0
        : connectionRoomCount[roomId] - 1;
    io.to(roomId).emit('connection-room-view', {
      count: connectionRoomCount[roomId],
    });
  });
});

server.listen(5000);
