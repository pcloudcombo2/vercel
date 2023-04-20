// import { join } from 'path';
const { join } = require('path');

/**
* @type {import("puppeteer").Configuration}
*/
module.exports = { cacheDirectory: join(__dirname, '.cache', 'puppeteer') };
// export const cacheDirectory = join(__dirname, '.cache', 'puppeteer');