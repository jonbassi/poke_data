const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('PokeAPI Middleware rodando na Vercel! Use: /api/pokemon/:name');
});

app.use('/api', routes);

module.exports = app;