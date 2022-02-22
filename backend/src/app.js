const express = require('express');
const cors = require('cors');

const app = express();

// settings
app.set('port', process.env.PORT || 5000);

// middlewares 
app.use(cors());
app.use(express.json());

// routes
app.use('/api/pokedex', require('./routes/pok_routes'))

module.exports = app;
