// dependencies
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');
const formatMessage = require('./utils/messages');
const { checkForViolations } = require('./sensitiveInfoDetection');

const {
   userJoin,
   getCurrentUser,
   userLeave,
   getRoomUsers,
} = require('./utils/users');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// set static file
app.use(express.static(path.join(__dirname, 'public')));

const botName = 'XeroxChat Bot';

// run when client connects
io.on('connection', (socket) => {
   socket.on('joinRoom', ({ username, room }) => {
      const user = userJoin(socket.id, username, room);

      socket.join(user.room);

      // welcome current user
      socket.emit('message', formatMessage(botName, 'Welcome to XeroxChat!'));

      // broadcast when a user connects
      socket.broadcast
         .to(user.room)
         .emit(
            'message',
            formatMessage(botName, `${user.username} has joined the chat!`)
         );

      // send users and room info
      io.to(user.room).emit('roomUsers', {
         room: user.room,
         users: getRoomUsers(user.room),
      });
   });

   // listen for chatMessage
   // listen for chatMessage
socket.on('chatMessage', (msg) => {
   const user = getCurrentUser(socket.id);
   
   // Call the checkForViolations function to detect sensitive information
   const violations = checkForViolations(msg);
   
   if (violations.length > 0) {
     // Handle violations
     // For example, you can emit a separate event to notify the user or take appropriate actions
     socket.emit('violations', violations);
     return;
   }
   
   io.to(user.room).emit('message', formatMessage(user.username, msg));
 });
 
   });

   // runs when clients disconnects
   socket.on('disconnect', () => {
      const user = userLeave(socket.id);

      if (user) {
         io.to(user.room).emit(
            'message',
            formatMessage(botName, `${user.username} has left the chat!`)
         );

         // send users and room info
         io.to(user.room).emit('roomUsers', {
            room: user.room,
            users: getRoomUsers(user.room),
         });
      }
   });

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
   console.log(`🎯 Server is running on PORT: ${PORT}`);
});
