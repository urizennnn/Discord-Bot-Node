import {Client,Message,User} from 'discord.js'
import { runServer } from '../app'
import { intents } from '../Intents/Intents'
import { config } from 'dotenv'
config()
export const client:Client = new Client({intents})


client.on('ready',()=>{
     console.log(`The Bot has been disturbed by ${client.user?.tag}`);
})
client.on('messageCreate',async(msg:Message)=>{
if(!msg.author.bot){
    msg.reply('Hello')
     try {
      const user = msg.author as User;
      const dmChannel = await user.createDM();
      await dmChannel.send('This is a direct message from the bot!');
    } catch (error) {
      console.error('Error sending a direct message:', error);
    }
}
})

runServer()
client.login(process.env.DISCORD_TOKEN)