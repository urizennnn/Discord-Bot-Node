import { Router, Request, Response } from 'express';

const router = Router();

router.get('/login', (req: Request, res: Response) => {
  // res.redirect('http://localhost:5000/auth/discord')
  res.redirect('https://discord-auth-7rvh.onrender.com/auth/discord');
});

export default router;
