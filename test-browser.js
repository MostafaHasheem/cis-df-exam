const puppeteer = require('puppeteer');

(async () => {
  try {
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    page.on('console', msg => console.log('BROWSER CONSOLE:', msg.text()));
    page.on('pageerror', error => console.error('BROWSER PAGE ERROR:', error.message));
    page.on('requestfailed', request => console.error('BROWSER REQUEST FAILED:', request.url(), request.failure().errorText));
    
    await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });
    
    const content = await page.content();
    console.log('HTML Length:', content.length);
    
    await browser.close();
  } catch (e) {
    console.error('SCRIPT ERROR:', e);
  }
})();
