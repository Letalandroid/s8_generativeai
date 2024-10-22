const generate_route = require('./routes/generate.route');
const ui_route = require('./routes/ui.route');
const express = require('express');
const path = require('path');

const app = express();

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(generate_route);
app.use(ui_route);

module.exports = app;