"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan = require('morgan');
const authRoute_1 = __importDefault(require("./Router/authRoute"));
const UserActionRoutes_1 = __importDefault(require("./Router/UserActionRoutes"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use((0, cors_1.default)());
app.use(morgan('dev'));
app.use('/authorize', authRoute_1.default);
app.use('/home', UserActionRoutes_1.default);
app.all('/', (req, res) => {
    res.send('Working');
});
app.listen(PORT, () => {
    console.log(`Bot is running successfully on port ${PORT}`);
});
