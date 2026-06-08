import {test,expect} from '@playwright/test'


test.only('screenshots demo',async ({page})=>{

await page.goto("https://demowebshop.tricentis.com/")

const timestamp=Date.now();

//current page screenshot
//await page.screenshot({path:'screenshots/'+'homepage'+timestamp+'.png'})

//full page screenshot
 await page.screenshot({path:'screenshots/'+'fullpage'+timestamp+'.png', fullPage:true})


/*element screenshot
const logo=page.locator("img[alt='Tricntis Demo Web Shop']"); // intentionally failed here
await logo.screenshot({path:'screenshots/'+'logo'+timestamp+'.png'})
*/

/*specific section screenshot
await page.locator("img[alt='Tricentis Demo Web Shop']").screenshot({path:'screenshots/'+'logo'+timestamp+'.png'})

await page.locator('.product-grid.home-page-product-grid').screenshot({path:'screenshots/'+'featuredproducts'+timestamp+'.png'})
*/
})

test('screenshots from config',async ({page})=>{
 await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123X'); //password incorrect
  await page.getByRole('button', { name: 'Log in' }).click();
   await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await expect(page.locator('#nameofuser')).toContainText('Welcome pavanol');
  
})

/*
 Screenshot Settings in playwright.config.ts 

export default defineConfig({ 
  use: { 
    screenshot: 'only-on-failure', // Options: 'on', 'off', 'only-on-failure', 'on-first-failure' 
  }, 
}); 
Screenshot Options: 
• 'on': Always take a screenshot after each test. 
• 'off': Do not capture screenshots (default). 
• 'only-on-failure': Capture screenshots only when a test fails. 
• 'on-first-failure': Capture screenshot only on the first failure of a test. 
Note: 
• Screenshots are saved inside the test-results folder. 
• Screenshots are linked in the Playwright HTML test reports.

*/