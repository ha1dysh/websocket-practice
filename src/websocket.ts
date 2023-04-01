import { Server } from 'socket.io';
import { createServer } from 'http';

import Message from './models/chat.js';

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: '*:*',
    methods: ['GET', 'POST'],
  },
});

io.on('connection', (socket) => {
  socket.on('chat-message', async (message) => {
    socket.broadcast.emit('chat-message', message);
    try {
      await Message.create(message);
    } catch (error) {
      console.log(error);
    }
  });
});

export default httpServer;
