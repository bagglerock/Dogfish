import { Router } from 'express';

export const router = Router();

router.get('/api/test/', (_, res) => {
  res.send('this is working');
});
