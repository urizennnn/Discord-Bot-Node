//@ts-ignore
import express from 'express'
//@ts-ignore
import {Request,Response} from 'express'
const morgan = require('morgan')



const app = express();
const PORT:(string | number) = process.env.PORT || 3000;

app.use(morgan('dev'))
app.get('/authorize/login',(req:Request,res:Response)=>{
// res.redirect('http://localhost:5000/auth/discord')
res.redirect('https://discord-auth-7rvh.onrender.com/auth/discord')
})
app.get('/home/dashboard', (req: Request, res: Response) => {
  try {
    const base64String = req.query.user as string; 
    console.log(base64String)
    if (!base64String) {
      return res.status(400).send('Bad Request: Missing user parameter');
    }

    const decodedData = Buffer.from(base64String, 'base64').toString('utf-8');

    console.log(decodedData, 'test');

    res.send(decodedData).status(200);
  } catch (error) {
    console.error('Error decoding Base64 string:', error);
    res.status(500).send(error);
  }
});



app.all('/', (req: Request, res: Response) => {
  res.send('Working');
});


export function runServer() {
  app.listen(PORT, () => {
    console.log(`Bot is running successfully on port ${PORT}`);
  });
}