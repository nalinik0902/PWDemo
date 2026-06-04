import{test,expect,Locator,chromium} from "@playwright/test";


/*A race condition happens when an event occurs before Playwright starts listening for it.
  To avoid this, I register the listener before triggering the action using Promise.all().  
  Auto-waiting doesn't help here because it only works with DOM elements, while popups, downloads, 
  and new tabs are browser-level events that must be handled with waitForEvent().*/

test("Tabs handling",async({})=>{
    const browser=await chromium.launch();
    const context=await browser.newContext();
    const page1=await context.newPage();
    await page1.goto("https://testautomationpractice.blogspot.com/");

   // await page1.locator("button:has-text('New Tab')").click();
   // await context.waitForEvent("page");

   //Promise.all() runs multiple promises at the same time and waits until all of them finish.
   //Execute async tasks in parallel and wait for all results.
   /* When a button click opens a popup, the popup event can happen immediately.
If I wait for the popup/page after the click, I may miss the event because it already fired.
So I use Promise.all() to start listening for the popup/page and perform the click at the same time.
This avoids race conditions and ensures the popup/page is captured reliably.*/

  const [page2] = await Promise.all([ context.waitForEvent("page"), page1.locator("button:has-text('New Tab')").click()
  ]);

  const pageCount = context.pages().length;
  console.log("No of pages created:",pageCount);
  console.log("Title of page1:", await page1.title());
  console.log("Title of page2:", await page2.title());
  await expect(page1).toHaveTitle("Automation Testing Practice");
  await expect(page2).toHaveTitle("SDET-QA Blog");

  await page2.waitForTimeout(5000);
  
  await page2.locator("input[type='text']").fill("Playwright");
    await page2.locator("input[type='submit']").click();









})