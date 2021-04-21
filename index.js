
const express = require('express');
require('dotenv').config();
const InitiateMongoServer = require('./config/db');

const app = express();

InitiateMongoServer();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Define Routes
app.use('/', require('./routes/index'));
app.use('/api/url', require('./routes/url'));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

