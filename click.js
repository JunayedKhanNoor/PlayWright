const { chromium } = require('playwright');
(async () => {
  // functional code
  const browser = await chromium.launch({ headless: false, slowMo: 300 });
  const page = await browser.newPage();
  await page.goto('https://www.apronus.com/music/lessons/unit01.htm');
  // click on keynotes
  await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1) > button')
  await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(5) > button')
  await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(3) > button')
  await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(7) > button')
  await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(2) > button')
  await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(3) > button')
  await browser.close();
})();
