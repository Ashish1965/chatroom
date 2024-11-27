
# Chat Room

This project implements a simple chat server and client using Node.js and the web-socket module. The server listens for incoming client connections, broadcasts messages to all connected clients (except sender) and handles disconnections. The client connects to the server, sends messages, and receives messages from other clients.


## How to run

Start the Server:

Open your terminal and navigate to the project directory/server.
Run the following command: node server.js

Start the Client server:

Open your terminal and navigate to the project directory.
Run the following command: npx serve client


## How to use


Once the server and clients are running, you can type messages in each client terminal.
Your messages will be broadcasted to all other connected clients except sender in real-time.


## Features

-Error Handling: Implement error handling to gracefully handle connection failures, message parsing errors, and other potential issues.

-Scalability: For larger-scale applications, explore using a more robust framework like Express.js or a dedicated WebSocket library like Socket.IO.

-User Interface: Enhance the user experience with a graphical user interface using libraries like Electron or a web-based frontend with frameworks like React or Vue.js.

