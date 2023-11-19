"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/login', (req, res) => {
    // res.redirect('http://localhost:5000/auth/discord')
    res.redirect('https://discord-auth-7rvh.onrender.com/auth/discord');
});
exports.default = router;
