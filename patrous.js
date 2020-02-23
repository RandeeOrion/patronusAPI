'use strict';

require('dotenv').config();

const express = require('express');
const cors = require ('cors');
const pg = require('pg');
const data = require('./patronus.json');

const PORT = process.env.PORT;
const app = express();
app.use(cors());



app.get('/', (req, res) => {
  res.send(data);
})

function errorHandler(err, req, res) {
  res.status(500).send(err);
}

app.listen(PORT, () => console.log(`Server up on ${PORT}`));
