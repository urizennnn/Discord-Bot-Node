import { client } from '../../Bot/Bot';
import { Request, Response } from 'express';
import fs from 'fs';

export const authRoute = {
  name: '/auth',
  run: async (req: Request, res: Response) => {
    try {
      const content = await fs.promises.readFile('../html/Auth.discord.ejs', 'utf-8');

      const args = {
        tag: client.user?.tag,
        content,
      };

      res.render('public/html/Auth.discord.ejs', args);
    } catch (error) {
      console.error('Error reading the file:', error);
      res.status(500).send('Internal Server Error');
    }
  },
};
