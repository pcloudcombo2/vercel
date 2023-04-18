import express, { json } from 'express';
const app = express();
import axios from 'axios';
import cors from 'cors';
import got from 'cloudflare-scraper';
import Xvfb from 'xvfb';
const xvfb = new Xvfb();

app.listen(process.env.PORT);
app.use(cors());
app.use(json());

app.get('/', main);

async function main(req, res) {
  try {
    xvfb.startSync();
    const response = await got.get('https://nowsecure.nl');
    console.log(response);
    res.status(200).send(response.body);
    xvfb.stopSync();
  } catch (error) {
    console.log(error);
    res.status(400).send(error);

  }
}