import{test,expect,Locator,Page} from '@playwright/test'


async function selectDateFromDatePicker(page: Page, targetDate: string, targetMonth: string, targetYear: string, isFuture:boolean) {
    await page.locator(".ui-datepicker-month").selectOption(targetMonth);
    await page.locator(".ui-datepicker-year").selectOption(targetYear);
   const dateElements:Locator =page.locator(".ui-datepicker-calendar td");
   const alldates:Locator[]=await dateElements.all();
    for(let date of alldates)    {
        const dateText=await date.innerText();
        if(dateText===targetDate)
        {
            await date.click();
            break;
        }
    }
}

async function selectdropdownOption(page: Page, dropdownLocator: Locator, optionTextToSelect: string) {
    await dropdownLocator.click();
     const options:Locator=page.locator("ul[role='listbox'] li");
     const count:number=await options.count();
     console.log(count);
        for(let i=0;i<count;i++){
            const optionText=await options.nth(i).innerText();
            if(optionText===optionTextToSelect){
                await options.nth(i).click();
                break;

            }
                }

                 
  }

test("Assignment", async({page})=>{
    await page.goto("https://www.dummyticket.com/dummy-ticket-for-visa-application/");

    // select dummy ticket for visa application
    await page.locator("#product_549").click();
    await page.locator("#travname").fill("John Doe");
    await page.locator("#travlastname").fill("Smith");

    // select dob
    await page.locator("#dob").click();
    
    const month:string="Jul";
    const year:string="1990";
    const date:string="18";

    
    /* await page.locator(".ui-datepicker-month").selectOption(month);
    await page.locator(".ui-datepicker-year").selectOption(year);
   const dateElements:Locator =page.locator(".ui-datepicker-calendar td");
   const alldates:Locator[]=await dateElements.all();
    for(let date of alldates)    {
        const dateText=await date.innerText();
        if(dateText===targetDate)
        {
            await date.click();
            break;
        }
    } */

    await selectDateFromDatePicker(page, date, month, year, false);

    // select sex
    await page.locator("#sex_2").check();

    // select from city
    await page.locator("#fromcity").fill("Madurai");
    // select to city
    await page.locator("#tocity").fill("Chennai");

    await page.waitForTimeout(5000);

    

    // select departure date from date picker

    await page.locator("#departon").click();
    const departureMonth:string="Jun";
    const departureYear:string="2026";
    const departureDate:string="15";

    await selectDateFromDatePicker(page, departureDate, departureMonth, departureYear, true);

    // purpose of dummy ticket

    /* await page.locator("#select2-reasondummy-container").click();
     const options:Locator=page.locator("ul[role='listbox'] li");
     const count:number=await options.count();
     console.log(count);
        for(let i=0;i<count;i++){
            const optionText=await options.nth(i).innerText();
            if(optionText==="Prank a friend"){
                await options.nth(i).click();
                break;

                }

            }

            // validate the selected option
            await expect(page.locator("#select2-reasondummy-container")).toContainText("Prank a friend");





 */
// select purpose of dummy ticket dropdown
const dropdownLocator:Locator=page.locator("#select2-reasondummy-container");
const optionTextToSelect:string="Prank a friend";
await selectdropdownOption(page, dropdownLocator, optionTextToSelect);
// validate the selected option
            await expect(dropdownLocator).toContainText("Prank a friend");



// select country from dropdown
const countryDropdownLocator:Locator=page.locator("#select2-billing_country-container");
const countryOptionText:string="India";
await selectdropdownOption(page, countryDropdownLocator, countryOptionText);

// validate the selected option
            await expect(countryDropdownLocator).toContainText("India");


// select state from dropdown
const stateDropdownLocator:Locator=page.locator("#select2-billing_state-container");
const stateOptionText:string="Tamil Nadu";
await selectdropdownOption(page, stateDropdownLocator, stateOptionText);
// validate the selected option
            await expect(stateDropdownLocator).toContainText("Tamil Nadu");

})
