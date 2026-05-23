import{test,expect,Locator} from '@playwright/test'

test('Bootstrap Dropdown Actions',async({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator("input[placeholder='Username']").fill("Admin");
    await page.locator("input[placeholder='Password']").fill("admin123");
    await page.locator("button[type='submit']").click();
    await page.waitForTimeout(6000);
    // click on PIM
    await page.getByText('PIM').click();
    // click on Employment status dropdown
    await page.locator("form i").nth(0).click();

    await page.waitForTimeout(5000);
        // Locate all the elements from the dropdown
    const options:Locator=page.locator("div[role='listbox'] span");
    const count:number=await options.count();
    console.log("No.of options are:",count);
    const textOptions:string[]=await options.allTextContents();
    for(let option of textOptions){
        console.log("Options are:",option);

            
    }
})





