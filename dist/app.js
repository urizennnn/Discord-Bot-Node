"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runServer = void 0;
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.set('view engine', 'ejs');
app.use(express_1.default.static('./public'));
app.all('/', (req, res) => {
    res.send('Working');
});
app.get('/test-auth', (req, res) => {
    const filePath = path_1.default.join(__dirname, 'public', 'html', 'Auth.discord.ejs');
    res.sendFile(filePath);
});
function runServer() {
    app.listen(PORT, () => {
        console.log(`Bot is running successfully on port ${PORT}`);
    });
}
exports.runServer = runServer;
