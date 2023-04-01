import { NextFunction, Request, Response } from 'express';

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const { AUTH, TOKEN } = process.env;
  const { auth = '', token = '' } = req.headers;

  if (auth !== AUTH && token !== TOKEN) {
    return res.status(401).json('not authorized');
  }
  if (auth === AUTH) {
    res.json(TOKEN);
  }
  if (token === TOKEN) {
    next();
  }
};
