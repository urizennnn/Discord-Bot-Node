"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intents = void 0;
const discord_js_1 = require("discord.js");
exports.intents = [
    discord_js_1.GatewayIntentBits.Guilds,
    discord_js_1.GatewayIntentBits.GuildMessages,
    discord_js_1.GatewayIntentBits.MessageContent
];
