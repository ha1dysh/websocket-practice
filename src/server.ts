import mongoose from 'mongoose';
import app from './app.js';
import websocket from './websocket.js';

const { MONGO_URL = '', PORT = 3000 } = process.env;

mongoose.set('strictQuery', true);
mongoose
  .connect(MONGO_URL)
  .then(() => {
    app.listen(PORT);
    websocket.listen(5566);
    console.log('mongo connected... server running...');
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
