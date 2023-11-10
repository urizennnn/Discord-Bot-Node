import express from 'express';
import { Request, Response } from 'express';
import path from 'path'; 

const app = express();
const PORT: (string | number) = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('./public'));

app.all('/', (req: Request, res: Response) => {
  res.send('Working');
});

app.get('/test-auth', (req: Request, res: Response) => {
  const filePath = path.join(__dirname, 'public', 'html', 'Auth.discord.ejs');
  res.sendFile(filePath);
});

export function runServer() {
  app.listen(PORT, () => {
    console.log(`Bot is running successfully on port ${PORT}`);
  });
}
