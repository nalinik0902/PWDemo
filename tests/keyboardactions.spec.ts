import{test,expect} from '@playwright/test'

test("Keyboard Actions",async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#input1").focus(); // focus() or click() method can be used to set focus on the input field
    await page.keyboard.insertText("Playwright"); // or type method can be used to type text in the input field
    await page.keyboard.press("Control+a"); // select all text  
    await page.keyboard.press("Control+c"); // copy selected text
    await page.keyboard.press("Tab"); // move to next input field
    await page.keyboard.press("Tab");// move to next input field
    await page.keyboard.press("Control+v");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Control+v");
    await page.waitForTimeout(5000);
})
