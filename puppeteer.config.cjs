// import { join } from 'path';
const { join } = require('path');

/**
* @type {import("puppeteer").Configuration}
*/
export const cacheDirectory = join(__dirname, '.cache', 'puppeteer');