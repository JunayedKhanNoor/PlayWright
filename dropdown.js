const { chromium } = require('playwright');
(async () => {
  // functional code
  const browser = await chromium.launch({ headless: false, slowMo: 200 });
  const page = await browser.newPage();
  await page.goto('https://the-internet.herokuapp.com/dropdown');
  const dropdown = await page.$('#dropdown');
  //value
  await dropdown.selectOption({ value: '1' });
  //label
  await dropdown.selectOption({ label: 'Option 2' });
  //index
  await dropdown.selectOption({ index: 1 });
  //values inside this select
  const availableOptions = await dropdown.$$('option');
  for (let index = 0; index < availableOptions.length; index++) {
    console.log(await availableOptions[index].innerText());
  }
  await browser.close();
})();
