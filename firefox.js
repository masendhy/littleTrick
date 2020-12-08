const puppeteer = require("puppeteer-firefox");

(async() =>{
    const browser = await puppeteer.launch({ headless: false});
    const page = await browser.newPage();

    await page.goto("http://zero.webappsecurity.com/index.html");
    await page.waitForSelector("#signin_button");
    await page.waitFor(5000);
    await browser.close();
})();