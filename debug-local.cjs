const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', err => console.log('PAGE ERROR:', err.message));
  
  await page.goto('http://127.0.0.1:8080/cis-df-exam/', { waitUntil: 'networkidle0' });
  
  const innerHTML = await page.evaluate(() => document.getElementById('app') ? document.getElementById('app').innerHTML.length : -1);
  console.log('App HTML length:', innerHTML);

  await browser.close();
})();
