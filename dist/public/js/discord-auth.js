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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoute = void 0;
const Bot_1 = require("../../Bot/Bot");
const fs_1 = __importDefault(require("fs"));
exports.authRoute = {
    name: '/auth',
    run: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        try {
            const content = yield fs_1.default.promises.readFile('../html/Auth.discord.ejs', 'utf-8');
            const args = {
                tag: (_a = Bot_1.client.user) === null || _a === void 0 ? void 0 : _a.tag,
                content,
            };
            res.render('public/html/Auth.discord.ejs', args);
        }
        catch (error) {
            console.error('Error reading the file:', error);
            res.status(500).send('Internal Server Error');
        }
    }),
};
