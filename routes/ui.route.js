const { Router } = require('express');
const path = require('path');

const ui = Router();

ui.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '/../pages/index.html'), (err) => {
        if (err) {
            console.error(err);
            res.status(err.status).end();
        }
    });
});

module.exports = ui;