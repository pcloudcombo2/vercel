const express = require('express');
const axios = require('axios');
const cors = require('cors');
const puppeteer = require("puppeteer-extra");
const pluginStealth = require("puppeteer-extra-plugin-stealth");
const { executablePath } = require("puppeteer");

// import got from 'cloudflare-scraper';
// import Xvfb from 'xvfb';
// const xvfb = new Xvfb();


const app = express();
app.listen(process.env.PORT);
app.use(cors());
app.use(express.json());

app.get('/t', main);

async function main(req, res) {
  try {
    puppeteer.use(pluginStealth());
    puppeteer.launch({ executablePath: executablePath() }).then(async browser => {
      // Create a new page 
      const page = await browser.newPage();
      await page.setDefaultNavigationTimeout(0);
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