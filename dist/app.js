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
    res.redirect('https://discord-auth-7rvh.onrender.com/auth/discord');
});
app.get('/home/dashboard', (req, res) => {
    console.log(req);
    //@ts-ignore
    res.send(req.user).status(200);
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
