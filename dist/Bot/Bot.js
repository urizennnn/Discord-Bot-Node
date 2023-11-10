"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.client = void 0;
const discord_js_1 = require("discord.js");
const app_1 = require("../app");
const Intents_1 = require("../Intents/Intents");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.client = new discord_js_1.Client({ intents: Intents_1.intents });
exports.client.on('ready', () => {
    var _a;
    console.log(`The Bot has been disturbed by ${(_a = exports.client.user) === null || _a === void 0 ? void 0 : _a.tag}`);
});
exports.client.on('messageCreate', (msg) => __awaiter(void 0, void 0, void 0, function* () {
    if (!msg.author.bot) {
        msg.reply('Hello');
        try {
            const user = msg.author;
            const dmChannel = yield user.createDM();
            yield dmChannel.send('This is a direct message from the bot!');
        }
        catch (error) {
            console.error('Error sending a direct message:', error);
        }
    }
}));
(0, app_1.runServer)();
exports.client.login(process.env.DISCORD_TOKEN);
