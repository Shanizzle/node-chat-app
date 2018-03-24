let socket = io();

// socket.on are listeners from the server
socket.on('connect', function() {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'ko',
    text: 'Well, alright'
  });
});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(createMessage) {
  console.log('New Message', createMessage);
});
