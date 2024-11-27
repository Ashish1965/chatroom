// Connect to the server using Socket.IO
const socket = io('https://chatroom-1-o49b.onrender.com'); // Establish a WebSocket connection to the server

// Select DOM elements
const chat = document.getElementById('chat'); // Chat container to display messages
const messageInput = document.getElementById('message'); // Input field for typing messages
const sendButton = document.getElementById('send'); // Button to send messages

// Listen for incoming messages from the server
socket.on('message', (data) => {
    const messageElement = document.createElement('div'); // Create a new div element for the message
    messageElement.textContent = data; // Set the text content of the message
    chat.appendChild(messageElement); // Add the message element to the chat container
    chat.scrollTop = chat.scrollHeight; // Auto-scroll to the bottom of the chat container
});

// Add an event listener for the send button click
sendButton.addEventListener('click', () => {
    const message = messageInput.value; // Get the value from the input field
    if (message.trim()) { // Check if the message is not empty or just spaces
        socket.emit('message', message); // Send the message to the server via Socket.IO
        messageInput.value = ''; // Clear the input field after sending the message
    }
});
