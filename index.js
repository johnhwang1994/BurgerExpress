const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieSession = require('cookie-session');

const keys = require('./config/keys');

const app = express();

app.get('/', (req, res) => {
  res.send({hi: 'here'});
})

const PORT = process.env.PORT || 5000;
app.listen(PORT);