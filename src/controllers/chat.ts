import { Request, Response } from 'express';
import Message from '../models/chat.js';

export const getMessages = async (req: Request, res: Response) => {
  const result = await Message.find().sort({ _id: 1 }).limit(50);

  res.json(result);
};
