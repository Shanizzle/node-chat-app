const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

let app = express();
let server = http.createServer(app);
let io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
console.log('New user connected');

    socket.emit('newMessage', {
      from: 'shanizzle',
      text: 'Baymax rulz',
      createdAt: 456

  });

  socket.on('createMessage', (newMessage) => {
    console.log('createMessage', newMessage);
  });

  socket.on('disconnect', () => {
  console.log('Disconnected from server');
  });
});

server.listen(port, () => {
  console.log(`Started up ${port}`);
});


module.exports.app = app;
