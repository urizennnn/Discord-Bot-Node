//@ts-ignore
import express from 'express'
//@ts-ignore
import {Request,Response} from 'express'
const morgan = require('morgan')



const app = express();
const PORT:(string | number) = process.env.PORT || 3000;

app.use(morgan('dev'))
app.get('/authorize/login',(req:Request,res:Response)=>{
res.redirect('https://discord-auth-7rvh.onrender.com/auth/discord')
})
app.get('/home/dashboard',(req:Request,res:Response)=>{
  res.send('test').status(200)
})

app.all('/', (req: Request, res: Response) => {
  res.send('Working');
});


export function runServer() {
  app.listen(PORT, () => {
    console.log(`Bot is running successfully on port ${PORT}`);
  });
}