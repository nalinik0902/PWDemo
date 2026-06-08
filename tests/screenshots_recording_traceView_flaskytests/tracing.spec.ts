/*
3 ways to create trace file(.zip)/ ways to enable tracing
------------------------------
1) using playwright.config.ts

export default defineConfig({ 
  use: { 
    trace: 'on', // Options: 'off', 'on', 'retain-on-failure', 'on-first-retry' 
  }, 
});

   
2) using command
             npx playwright test mytest.spec.ts --trace on
3) code(programmitically)

     context.tracing.start({screenshots:true,snapshots:true});
     //statements
      context.tracing.stop({path:'trace.zip'});

To view trace file ( 3 ways)
---------------------------
1) from html file--> click on trace.zip
2) through command  - npx plawright show-trace trace.zip
3) utility  -- > https://trace.playwright.dev/    ( drag and drop/upload trace.zip file)

*/

/*
In playwright, Trace viewer is a debugging tool that records everything that happened during test run .
The viewer contains:

Timeline – sequence of test actions.
Action Details – click, fill, hover, etc.
Snapshots – page screenshots at every step.
Network Tab – API calls and responses.
Console Tab – browser logs.
Source Code – test code corresponding to each action.


*/



import { test, expect} from '@playwright/test';

test.only('tracing test', async ({page,context}) => {


 context.tracing.start({screenshots:true,snapshots:true}); // enabled trace through programatically

 await page.goto('https://www.demoblaze.com/index.html');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123'); 
  await page.getByRole('button', { name: 'Log in' }).click();
   await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible();
  await expect(page.locator('#nameofuser')).toContainText('Welcome pavanol');

  context.tracing.stop({path:'trace.zip'});
    
});
