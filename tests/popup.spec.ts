import{test,expect,Locator,chromium} from "@playwright/test";

test("Popup handling",async({})=>{
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page1 = await context.newPage();
    await page1.goto("https://testautomationpractice.blogspot.com/");

   const [popupPage]= await Promise.all([page1.waitForEvent("popup"), page1.locator("#PopUp").click()]);
    //await page1.locator("#PopUp").click();
    // const popupPage = await page1.waitForEvent("popup");
    const allpopupPages = context.pages();
    //await popupPage.waitForTimeout(5000);
    console.log("Number of popup pages:", allpopupPages.length);
    console.log(await allpopupPages[0].title());
    console.log(await allpopupPages[1].title());
    for(let p of allpopupPages){
        const title=await p.title();
        console.log("Title:",title);
        if(title.includes("Playwright"))
         {
            const [page2]=await Promise.all([context.waitForEvent("page"), p.locator("a:has-text('Get started')").click()]);
            //await p.locator("a:has-text('Get started')").click();
            console.log("Title:", await page2.title());
              }    
}
});
