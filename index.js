import express, { json } from 'express';
const app = express();
import axios from 'axios';
import cors from 'cors';
import got from 'cloudflare-scraper';

app.listen(process.env.PORT);
app.use(cors());
app.use(json());

app.get('/', main);

async function main(req, res) {
  try {
    const response = await got.get('https://nowsecure.nl');
    res.status(200).send(response.body);
  } catch (error) {
    res.status(400).send(error);

  }
}