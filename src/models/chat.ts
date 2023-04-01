import { Schema, model } from 'mongoose';

const messageSchema = new Schema({
  message: {
    type: String,
    required: true,
  },
  id: { type: String, required: true },
});

const Message = model('message', messageSchema);

export default Message;
