let socket = io();

// socket.on are listeners from the server
socket.on('connect', function() {
  console.log('Connected to server');

});

socket.on('disconnect', function() {
  console.log('Disconnected from server');
});

socket.on('newMessage', function(message) {
  console.log('newMessage', message);
  let li = $('<li></li>');
  li.text(`${message.from}: ${message.text}`);

  $('#messages').append(li);
});


$('#message-form').on('submit', function(e) {
  e.preventDefault();

  socket.emit('createMessage',  {
    from: 'User',
    text: $('#message').val()
  }, function() {

  });
});
