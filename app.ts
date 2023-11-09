import express,{Request,Response} from 'express'
const app = express()
let PORT :string, number = process.env.PORT || 3000



app.all('/',(req:Request,res:Response)=>{
res.send('Working')
})

export function runServer(){
app.listen(PORT,()=>{
  console.log(`Bot is running successfullyy`)
})
}