let arc = require('@architect/functions')
let static = arc.http.helpers.static
const chromium = require('chrome-aws-lambda');
const puppeteer = require('puppeteer-core');

exports.handler = async function http(req, res) {
    let result = null;
    let browser = null;
    try {
        browser = await puppeteer.launch({
            args: chromium.args,
            defaultViewport: chromium.defaultViewport,
            executablePath: await chromium.executablePath,
            headless: chromium.headless,
        });
        let page = await browser.newPage();
        await page.goto('https://s3.amazonaws.com/angular-aem-app/index.html', {
            waitUntil: 'networkidle2'
        });
        result = await page.pdf({
            format: 'Letter',
            scale: .5
        });
    } catch (error) {
        return {
            type: 'text/html; charset=utf8',
            body: `<h1>Error says: ${error} <br>${static}</h1>`
        }
    } finally {
        if (browser !== null) {
            await browser.close();
        }
    }
  return {
    type: 'application/json',
    body: result.toString('base64'),
    cors: true
  }
}