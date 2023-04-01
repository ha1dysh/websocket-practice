import { NextFunction, Request, Response } from 'express';

export const tryCatch = (func:(req: Request, res: Response, next: NextFunction) => Promise<void> | void) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await func(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};
