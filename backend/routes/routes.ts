import { Router } from 'express';

export const router = Router();

router.get('/api/test/', (_, res) => {
  console.log('test test');
  res.send('this is working');
});
