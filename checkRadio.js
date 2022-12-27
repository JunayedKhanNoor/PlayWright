const { chromium, firefox } = require('playwright');
(async () => { // anonymous arrow function
  // functional code
  // launching browser
  const browser = await chromium.launch({ headless: false, slowMo: 100 });
  // creating a page inside browser
  const page = await browser.newPage();
  // navigate to site
  await page.goto('https://www.w3schools.com/howto/howto_css_custom_checkbox.asp');
  // check the second checkbox
  const checks = await page.$$('#main div :nth-child(1) input[type="checkbox"]');
  await checks[1].check();
  await checks[0].uncheck();
  // select the second radio button
  const radios = await page.$$('#main div :nth-child(1) input[type="radio"]');
  await radios[1].check();
  await radios[0].uncheck();
  // closing browser
  await browser.close();
})();// function calls itself
