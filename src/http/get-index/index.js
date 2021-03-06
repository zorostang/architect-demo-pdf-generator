// @architect/functions enables secure sessions, express-style middleware and more
// let arc = require('@architect/functions')
// let url = arc.http.helpers.url
const puppeteer = require('puppeteer');

exports.handler = async function http(req) {
  
    // const browser = await puppeteer.launch();
    // const page = await browser.newPage();
    // await page.goto('https://news.ycombinator.com', {
    //     waitUntil: 'networkidle2'
    // });
    // const pdf = await page.pdf({
    //     format: 'A4'
    // });
    // await browser.close();

  return {
    type: 'text/html; charset=utf8',
    body: '<h1>Hello world!</h1>'
  }
}

// Example responses

/* Forward requester to a new path
exports.handler = async function http(request) {
  if (process.env.NODE_ENV !== 'production') {
    console.log(request)
  }
  return {
    status: 302,
    location: '/staging/about',
  }
}
*/

/* Successful resource creation, CORS enabled
exports.handler = async function http(request) {
  return {
    status: 201,
    type: 'application/json',
    body: JSON.stringify({ok: true}),
    cors: true,
  }
}
*/

/* Deliver client-side JS
exports.handler = async function http(request) {
  return {
    type: 'text/javascript',
    body: 'console.log("Hello world!")',
  }
}
*/

// Learn more: https://arc.codes/guides/http
