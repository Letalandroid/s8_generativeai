const { Router } = require('express');

const ui = Router();

ui.get('/', async (req, res) => {
    res.sendFile(__dirname + "/pages/index.html");
});

module.exports = ui;