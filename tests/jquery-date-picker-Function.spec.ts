import{test,expect,Locator} from '@playwright/test'


async function selectDateFromDatePicker(page: any, targetDate: string, targetMonth: string, targetYear: string, isFuture:boolean) {
      while(true){
        const currentMonth= await page.locator(".ui-datepicker-month").innerText();
        const currentYear= await page.locator(".ui-datepicker-year").innerText();
        if(currentMonth===targetMonth && currentYear===targetYear){
            break;
        }
        await page.locator(".ui-datepicker-next").click(); // Click the next button to navigate to the next month
        }

     //   select date from the date picker
     const dates:Locator=page.locator(".ui-datepicker-calendar td"); // return all date elements
     const allDate:Locator[]= await dates.all();
     for(let date of allDate)
     {
        const dateText=await date.innerText();
        if(dateText===targetDate)
        {
            await date.click();
            break;
        }
     }
}
test("JqueryDatepicker", async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");
    const dataInput:Locator=page.locator("#datepicker");

    // Approach 1: using fill() method
    await dataInput.fill("01/01/2025");

    // Approach 2 using date picker
    await dataInput.click(); // Open the date picker

    // Future target date
    const Date:string="18";
    const month:string="July";
    const year:string="2026";

    await selectDateFromDatePicker(page, Date, month, year, true);

     const expectedDate:string=await dataInput.inputValue();
    expect(expectedDate).toBe("07/18/2026");

})