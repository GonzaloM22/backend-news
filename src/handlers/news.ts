import { Request, Response } from 'express';

export const createNews = (req: Request, res: Response) => {
  res.json("Desde post")
};
