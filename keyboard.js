const { chromium } = require('playwright');

(async() => { // anonymous arrow function
    // function code
  
  	// launching browser
    const browser = await chromium.launch({ headless:false , slowMo:100 });
  	// creating a page inside browser
  	const page = await browser.newPage();
   	// navigating to site
    await page.goto('https://the-internet.herokuapp.com/key_presses');
    await page.click('input');
    await page.keyboard.type('one two three simply exist does not simply exit vim');
    await page.keyboard.down('Shift');
    for (let i = 0; i < 'exit vim'.length; i++) {
        await page.keyboard.press('ArrowLeft');
    }
    await page.keyboard.up('Shift');
    await page.keyboard.press('Backspace');
    await page.keyboard.type('Hello Junayed');
  	// closing browser
    await browser.close();
  
})(); // function calls itself