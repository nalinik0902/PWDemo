Auto-wait mechanism will perform actionability checks for the element before performing any actions/assertions.

Actionability checks - wheather element is visible or stable or enabled before doing actions
page.locator("").click();
If you don't want playwright to perform actionability checks, {use force:true}
page.locator("").click({force:true})


Timeouts are used in Playwright to define how long the framework should wait before failing a test or assertion. Playwright provides flexible options to manage timeouts globally or locally. 
Test Timeout (Timeout for Each Test) 
• Default: 30,000 ms (30 seconds) 
• This timeout defines how long a single test is allowed to run. 

Set Test Timeout in the Config File: 
To change the timeout globally for all tests: 
// playwright.config.ts 
export default defineConfig({  
timeout: 60000 
}) 


Override/Set Timeout for a Specific Test
 
To change the timeout for just one test: 
test('my long-running test', async ({ page }) => { 
  test.setTimeout(60000); // 60 seconds 
  // your test code here 
}); 

Make Test Slower Temporarily 
To automatically triple the default timeout: 
test('slow test', async ({ page }) => { 
  test.slow(); // Now timeout = 90,000 ms (3x default) 
});


Expect Timeout (Timeout for Assertions) 
• Default: 5,000 ms (5 seconds) 

Set Expect Timeout in the Config File 
To apply a longer wait for all expect conditions: 
// playwright.config.ts 
export default defineConfig({  
    expect: { timeout: 10000 } 
   }) 
 
Override/set Timeout for a Specific Expect 
You can override the timeout for a particular assertion like this: 
await expect(locator).toBeVisible({ timeout: 10_000 });
