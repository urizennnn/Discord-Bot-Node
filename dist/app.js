"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runServer = void 0;
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
let PORT, number = process.env.PORT || 3000;
app.all('/', (req, res) => {
    res.send('Working');
});
function runServer() {
    app.listen(PORT, () => {
        console.log(`Bot is running successfullyy`);
    });
}
exports.runServer = runServer;
