import { Router } from 'express';
import { createNews } from './handlers/news';

const router = Router();

router.post('/', createNews);

export default router;
