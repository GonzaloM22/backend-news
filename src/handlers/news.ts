import { Request, Response } from 'express';
import News from '../models/News.model';

export const getNews = async (req: Request, res: Response) => {
  try {
    const news = await News.findAll();
    res.json({ data: news });
  } catch (error) {
    console.log(error);
  }
};

export const getNewsById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const news = await News.findByPk(id);

    if (!news) return res.status(404).json('not found');

    res.json({ data: news });
  } catch (error) {
    console.log(error);
  }
};

export const createNews = async (req: Request, res: Response) => {
  try {
    const news = await News.create(req.body);
    res.status(201).json({ data: news });
  } catch (error) {
    console.log(error);
  }
};

export const updateNews = async (req: Request, res: Response) => {
  const { id } = req.params;

  const news = await News.findByPk(id);

  if (!news) return res.status(404).json('not found');

  // Actualizar
  await news.update(req.body);
  await news.save();

  res.json({ data: news });
};

export const deleteNews = async (req: Request, res: Response) => {
  const { id } = req.params;

  const news = await News.findByPk(id);

  if (!news) return res.status(404).json('not found');

  // Eliminar
  await news.destroy();
  res.json({ data: 'deleted news' });
};
