"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runServer = void 0;
//@ts-ignore
const express_1 = __importDefault(require("express"));
const morgan = require('morgan');
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(morgan('dev'));
app.get('/authorize/login', (req, res) => {
    // res.redirect('http://localhost:5000/auth/discord')
    res.redirect('https://discord-auth-7rvh.onrender.com/auth/discord');
});
app.get('/home/dashboard', (req, res) => {
    try {
        const base64String = req.query.user;
        console.log(base64String);
        if (!base64String) {
            return res.status(400).send('Bad Request: Missing user parameter');
        }
        const decodedData = Buffer.from(base64String, 'base64').toString('utf-8');
        console.log(decodedData, 'test');
        res.send(decodedData).status(200);
    }
    catch (error) {
        console.error('Error decoding Base64 string:', error);
        res.status(500).send(error);
    }
});
app.all('/', (req, res) => {
    res.send('Working');
});
function runServer() {
    app.listen(PORT, () => {
        console.log(`Bot is running successfully on port ${PORT}`);
    });
}
exports.runServer = runServer;
