import passport from 'passport';
import { Strategy as DiscordStrategy } from 'passport-discord';

const scopes = ['identify', 'email', 'guilds', 'guilds.join'];

passport.use(new DiscordStrategy({
    clientID: process.env.CLIENT_ID as string,
    clientSecret: process.env.DISCORD_SECRET as string,
    callbackURL: 'http://localhost:3000/auth/discord',
    scope: scopes
}, async (accessToken, refreshToken, profile, done) => {
    try {
        return done(null, 'user');
    } catch (error:any) {
        return done(error);
    }
}));