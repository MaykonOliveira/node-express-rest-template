require('dotenv/config');
const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const allowCors = require('./src/cors');

// Iniciando o App
const app = express();
app.use(express.json());
app.use(allowCors);

// Iniciando o DB
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
requireDir('./src/models');

// Rotas
app.use('/api', require('./src/routes'));

app.listen(process.env.PORT || 3001);
