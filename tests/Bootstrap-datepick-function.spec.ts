import{test,expect,Page,Locator} from '@playwright/test'


async function selectCheckInDateFromDatePicker(page: Page, targetDate: string, targetMonth: string, targetYear: string, isFuture:boolean) {
     // select check-in date
     while(true){
        const currentMonthYear= await page.locator("#bui-calendar-month-2026-5").innerText();
        const currentMonth=currentMonthYear.split(" ")[0];
        const currentYear=currentMonthYear.split(" ")[1];
        if(currentMonth===targetMonth && currentYear===targetYear){

            break;
        }
        await page.locator("button[aria-label='Next month']").click();
    }

    // select the specified check-in date
    const checkinDateElements= await page.locator("table.b8fcb0c66a tbody").nth(0).locator("td").all();
    for(let dateElement of checkinDateElements)
    {
        const dateText=await dateElement.innerText();
        if(dateText===targetDate)
        {
            await dateElement.click();
            break;
        }
    }
}

    async function selectCheckoutDateFromDatePicker(page: Page, targetDate: string, targetMonth: string, targetYear: string, isFuture:boolean) {
    // select check-out date
    while(true){
        const currentMonthYear= await page.locator("#bui-calendar-month-2026-6").innerText();
        const currentMonth=currentMonthYear.split(" ")[0];
        const currentYear=currentMonthYear.split(" ")[1];
        if(currentMonth===targetMonth && currentYear===targetYear){
            break;
        }
        await page.locator("button[aria-label='Next month']").click();
    }

    // select the specified check-out date
    const checkoutDateElements= await page.locator("table.b8fcb0c66a tbody").nth(1).locator("td").all();
    for(let dateElement of checkoutDateElements)
    {
        const dateText=await dateElement.innerText();
        if(dateText===targetDate)
        {
            await dateElement.click();
            break;
        }
    }
        
}
test("Booking.com Date Picker select check-in and check-out dates", async({page})=>{
    await page.goto("https://www.booking.com/");
    // click on date picker input field to open the date picker
    await page.getByTestId("date-display-field-start").click();

    // Select check-in date
    const chechinDate:string="20";
    const checkinMonth:string="July";
    const checkinYear:string="2026";

    await selectCheckInDateFromDatePicker(page, chechinDate, checkinMonth, checkinYear, true);

   
    // select check-out date
    const checkoutDate:string="25";
    const checkoutMonth:string="August";
    const checkoutYear:string="2026";

    await selectCheckoutDateFromDatePicker(page, checkoutDate, checkoutMonth, checkoutYear, true);

})