import{test,expect} from '@playwright/test'
import * as fs from 'node:fs';  // having issue here 
test("download file", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html");
    await page.locator("#inputText").fill("Playwright"); // fill the input field with some text to be included in the downloaded file
    await page.locator('#generateTxt').click(); // click the button to generate the file to be downloaded

    const [download] = await Promise.all([page.waitForEvent("download"), page.locator("txtDownloadLink").click()]);
    
    const downloadPath="downloads/File1.txt";
    await download.saveAs(downloadPath);  // saveAs() method is used to save the downloaded file to a specific location
    
    // Check if the file exists at the specified location
    const fileexist=fs.existsSync(downloadPath); // returns true if the file exists at the specified path, otherwise returns false
    expect(fileexist).toBeTruthy(); // boolean assertion to verify that the file exists at the specified location
    
    await page.waitForTimeout(5000);

    if(fileexist){
        fs.unlinkSync(downloadPath); // delete the file after verification
    }

})y6 5

