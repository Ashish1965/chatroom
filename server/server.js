// Importing the required modules
const http = require('http'); // Module to create an HTTP server
const socketIo = require('socket.io'); // Module to enable WebSocket communication
const cors = require('cors'); // Middleware for handling Cross-Origin Resource Sharing (CORS)
const express = require('express'); // Framework for building web applications

// Initializing the Express application
const app = express();

// Creating an HTTP server from the Express app
const server = http.createServer(app);

// Initializing Socket.IO with the server and enabling CORS
const io = socketIo(server, {
    cors: {
        origin: "*", // Allow all origins to connect
        methods: ["GET", "POST"] // Allow only GET and POST HTTP methods
    }
});

// Use the CORS middleware in the Express app
app.use(cors()); // This allows requests from different origins

// Array to keep track of connected clients
let clients = [];

// Event listener for a new client connection
io.on('connection', (socket) => {
    console.log('A new client connected:', socket.id); // Log the client's unique socket ID

    clients.push(socket); // Add the connected socket to the clients array

    // Event listener for receiving a message from the client
    socket.on('message', (data) => {
        console.log(`Message from ${socket.id}: ${data}`); // Log the message received from the client

        // Broadcast the message to all other connected clients
        clients.forEach((client) => {
            if (client !== socket) { // Exclude the sender from receiving their own message
                client.emit('message', data); // Send the message to the other client
            }
        });
    });

    // Event listener for client disconnection
    socket.on('disconnect', () => {
        console.log(`Client disconnected: ${socket.id}`); // Log the disconnection event

        // Remove the disconnected socket from the clients array
        clients = clients.filter((client) => client !== socket);
    });
});

// Port number for the server to listen on
const PORT = 3000;

// Start the server and listen on the specified port
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`); // Log that the server has started
});
