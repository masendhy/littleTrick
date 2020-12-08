//===== 1 trick ( screenshoot page) ======

// const puppeteer = require('puppeteer');

// (async() =>{
// const browser = await puppeteer.launch();
// const page = await browser.newPage();
// await page.goto("https://example.com",{waitUntil:"networkidle0"});
// await page.screenshot({path:"example.png", fullPage: true});
// await browser.close();

// })();



// ===== 2 trick ( convert to pdf) =====

// const puppeteer = require('puppeteer');

// (async() =>{
// const browser = await puppeteer.launch();
// const page = await browser.newPage();
// await page.goto("https://example.com",{waitUntil:"networkidle0"});
// await page.pdf({path:"example.pdf", format:"A6"});
// await browser.close();

// })();


// ===== 3 trick (emulating devices) =====

// const puppeteer = require('puppeteer');
// const devices = puppeteer.devices;

// (async() =>{
// const browser = await puppeteer.launch({headless:false});
// const page = await browser.newPage();
// await page.emulate(devices["iPad"]);
// await page.goto("https://pptr.dev");
// await page.waitForTimeout(10000);
// await browser.close();

// })();



// ===== 4 trick (faking geolocation) =====

// const puppeteer = require('puppeteer');

// (async() =>{
//     // Faking Geolocation
// const browser = await puppeteer.launch({headless:false});
// const page = await browser.newPage();

// // Grant permission for geolocation change
// const context = browser.defaultBrowserContext();
// await context.overridePermissions("https://pptr.dev",["geolocation"]);

// await page.goto("https://pptr.dev");
// await page.waitForSelector("title");

// // change geolocation to the north pole
// await page.setGeolocation({latitude:90, longetitude:0});


// await browser.close();

// })();


// ===== 5 trick (Accessibility Test) =====

// const puppeteer = require('puppeteer');

// (async() =>{
// const browser = await puppeteer.launch({headless:false});
// const page = await browser.newPage();

// await page.goto("https://pptr.dev");
// await page.waitForSelector("title");

// const snapshot = await page.accessibility.snapshot();
// console.log(snapshot);


// await browser.close();

// })();


// ===== 6 trick (Execute Navigation API within the page context) =====

const puppeteer = require('puppeteer');

(async() =>{
const browser = await puppeteer.launch({headless:false});
const page = await browser.newPage();

await page.goto("https://pptr.dev");
await page.waitForSelector("title");

const metrics = await page.evaluate(() => JSON.stringify(window.performance))
console.log(JSON.parse(metrics));

await browser.close();
})();