const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));
  
  console.log('Navigating to GitHub Pages...');
  await page.goto('https://MostafaHasheem.github.io/cis-df-exam/', { waitUntil: 'networkidle0' });
  
  console.log('Taking screenshot...');
  await page.screenshot({ path: '/Users/mostafa/.gemini/antigravity-ide/brain/c724b714-124c-427e-9be2-23d8e9aef321/live_screenshot.png' });
  
  const innerHTML = await page.evaluate(() => document.getElementById('app') ? document.getElementById('app').innerHTML.length : -1);
  const bodyHTML = await page.evaluate(() => document.body.innerHTML.length);
  console.log('App HTML length:', innerHTML);
  console.log('Body HTML length:', bodyHTML);

  await browser.close();
})();
