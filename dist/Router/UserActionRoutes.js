"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.get('/dashboard', (req, res) => {
    try {
        const base64String = req.query.user;
        console.log(base64String);
        if (!base64String) {
            return res.status(400).send('Bad Request: Missing user parameter');
        }
        const decodedData = Buffer.from(base64String, 'base64').toString('utf-8');
        console.log(decodedData);
        res.send(decodedData).status(200);
    }
    catch (error) {
        console.error('Error decoding Base64 string:', error);
        res.status(500).send(error);
    }
});
exports.default = router;
