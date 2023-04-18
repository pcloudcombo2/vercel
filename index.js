const express = require('express');
const app = express();
const axios = require('axios');
const cors = require('cors');

app.listen(process.env.PORT);
app.use(cors());
app.use(express.json());

app.get('/', main);

async function main(req, res) {
  try {

  } catch (error) {

  }
}