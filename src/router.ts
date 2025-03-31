import { Router } from 'express';
import {
  createNews,
  deleteNews,
  getNews,
  getNewsById,
  updateNews,
} from './handlers/news';
import { body, param } from 'express-validator';
import { handleInputErrors } from './middleware';

const router = Router();

router.get('/', getNews);
router.get(
  '/:id',
  param('id').isInt().withMessage('Invalid Id'),
  handleInputErrors,
  getNewsById
);

router.post(
  '/',
  body('title').notEmpty().withMessage('Title is required'),
  handleInputErrors,
  createNews
);

router.put(
  '/:id',
  param('id').isInt().withMessage('Invalid Id'),
  handleInputErrors,
  updateNews
);

router.put(
  '/:id',
  param('id').isInt().withMessage('Invalid Id'),
  handleInputErrors,
  deleteNews
);

export default router;
