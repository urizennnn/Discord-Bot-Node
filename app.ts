import express from 'express'
import {Request,Response} from 'express'
const morgan = require('morgan')
const AuthRoute = require('./Router/authRoute')
const UserAction = require('./Router/UserActionRoutes')

const app = express();
const PORT:(string | number) = process.env.PORT || 3000;

app.use(morgan('dev'))
app.use('/authorize',AuthRoute)
app.use('/home',UserAction)



app.all('/', (req: Request, res: Response) => {
  res.send('Working');
});


  app.listen(PORT, () => {
    console.log(`Bot is running successfully on port ${PORT}`);
  });