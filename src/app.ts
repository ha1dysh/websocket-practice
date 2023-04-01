import express, { Request, Response } from 'express';
import cors from 'cors';
import logger from 'morgan';
import * as dotenv from 'dotenv';
dotenv.config();

import chat from './routes/chat.js';
import { auth } from './middlewares/lock.js';

const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(auth);

app.use('/api/chat', chat);

app.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'not found' });
});

app.use((error: Error, req: Request, res: Response) => {
  res.status(500).json({ message: error.message });
});

export default app;
