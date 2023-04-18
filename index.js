import express, { json } from 'express';
const app = express();
import axios from 'axios';
import cors from 'cors';

app.listen(process.env.PORT);
app.use(cors());
app.use(json());

app.get('/', main);

async function main(req, res) {
  try {
    res.status(200).json({ message: 'done' })
  } catch (error) {

  }
}