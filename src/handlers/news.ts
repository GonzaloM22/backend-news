import { Request, Response } from 'express';
import News from '../models/News.model';
import { Op } from 'sequelize';

export const getNews = async (req: Request, res: Response) => {
  try {
    const news = await News.findAll();
    res.json({ data: news });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
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
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getNewsByAuthor = async (req: Request, res: Response) => {
  try {
    const { author } = req.params;

    const news = await News.findAll({
      where: {
        author: {
          [Op.iLike]: `%${author}%`,
        },
      },
    });

    if (news.length === 0)
      return res.status(404).json({ error: 'No news found for this author' });

    res.json({ data: news });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const createNews = async (req: Request, res: Response) => {
  try {
    const news = await News.create(req.body);
    res.status(201).json({ data: news });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Internal server error' });
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
