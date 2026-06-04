import {test,expect} from "@playwright/test";

test("File Upload",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#singleFileInput").setInputFiles('tests/uploads/test1.txt');
    await page.locator("button:has-text('Upload Single File')").click();

   const singleFileStatus = page.locator("#singleFileStatus");
   expect(singleFileStatus).toContainText("test1.txt"); // checks if file is uploaded successfully
})

test.only("Multiple File Upload",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    await page.locator("#multipleFilesInput").setInputFiles(['tests/uploads/test1.txt','tests/uploads/test2.txt']);
    await page.locator("button:has-text('Upload Multiple Files')").click();
})