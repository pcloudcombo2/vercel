import express, { json } from 'express';
const app = express();
import axios from 'axios';
import cors from 'cors';
// import got from 'cloudflare-scraper';
// import Xvfb from 'xvfb';
// const xvfb = new Xvfb();
import { use, launch } from "puppeteer-extra";
import pluginStealth from "puppeteer-extra-plugin-stealth";
import { executablePath } from "puppeteer";


app.listen(process.env.PORT);
app.use(cors());
app.use(json());

app.get('/', main);

async function main(req, res) {
  try {
    use(pluginStealth());

    // Launch pupputeer-stealth 
    launch({ executablePath: executablePath() }).then(async browser => {
      // Create a new page 
      const page = await browser.newPage();

      // Setting page view 
      await page.setViewport({ width: 1280, height: 720 });

      // Go to the website 
      await page.goto("https://www.getastra.com/");

      // Wait for page to download 
      await page.waitForTimeout(1000);

      // Take screenshot 
      let content = await page.content();
      res.status(200).send(content);
      // Close the browser 
      await browser.close();
    });

  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}

// async function main(req, res) {
//   try {
//     xvfb.startSync();
//     const response = await got.get('https://nowsecure.nl');
//     console.log(response);
//     res.status(200).send(response.body);
//     xvfb.stopSync();
//   } catch (error) {
//     console.log(error);
//     res.status(400).send(error);

//   }
// }