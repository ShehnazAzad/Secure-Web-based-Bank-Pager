const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');
const { checkForViolations } = require('./sensitiveInfoDetection');

// get username and room from URl
const { username, room } = Qs.parse(location.search, {
   ignoreQueryPrefix: true,
});

const socket = io();

// Join chatroom
socket.emit('joinRoom', { username, room });

// get room and users
socket.on('roomUsers', ({ room, users }) => {
   outputRoomName(room);
   outputUsers(users);
});

// message from server
socket.on('message', (message) => {
   // console.log(message);
   outputMessage(message);

   // scroll down
   chatMessages.scrollTop = chatMessages.scrollHeight;
});

// message submit
chatForm.addEventListener('submit', (e) => {
   e.preventDefault();

// Get the message input element
const messageInput = document.getElementById('msg');

// Get the message value
const message = messageInput.value;

// Check for violations in the message
const violations = checkForViolations(message);

if (violations.length > 0) {
  // Handle violations
  // For example, you can display a warning message or prevent submission
  alert('Warning: The message contains sensitive information.');
  return;
}

// Process and send the message further
// ...


   // het message text
   const msg = e.target.elements.msg.value;

   // emit message to server
   socket.emit('chatMessage', msg);

   // clear input
   e.target.elements.msg.value = '';
   e.target.elements.msg.focus();
});

// output msg to DOM
function outputMessage(message) {
   const div = document.createElement('div');
   div.classList.add('message');
   div.innerHTML = ` <p class="meta">${message.username} <span>${message.time}</span></p>
   <p class="text">
      ${message.text}
   </p>`;

   document.querySelector('.chat-messages').appendChild(div);
}

// add room name to DOM
function outputRoomName(room) {
   roomName.innerHTML = room;
}

// add users to DOM
function outputUsers(users) {
   userList.innerHTML = `
      ${users.map((user) => `<li>${user.username}</li>`).join('')}
   `;
}
