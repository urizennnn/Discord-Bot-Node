"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan = require('morgan');
const AuthRoute = require('./Router/authRoute');
const UserAction = require('./Router/UserActionRoutes');
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use(morgan('dev'));
app.use('/authorize', AuthRoute);
app.use('/home', UserAction);
app.all('/', (req, res) => {
    res.send('Working');
});
app.listen(PORT, () => {
    console.log(`Bot is running successfully on port ${PORT}`);
});
