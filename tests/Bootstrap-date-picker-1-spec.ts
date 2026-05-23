import{test,expect,page,Locator} from '@playwright/test'

test("Booking.com Date Picker select check-in and check-out dates", async({page})=>{
    await page.goto("https://www.booking.com/");
    // click on date picker input field to open the date picker
    await page.getByTestId("date-display-field-start").click();

    // Select check-in date
    const chechinDate:string="20";
    const checkinMonth:string="July";
    const checkinYear:string="2026";

    while(true){
        const currentMonthYear= await page.locator("#bui-calendar-month-2026-5").innerText();
        const currentMonth=currentMonthYear.split(" ")[0];
        const currentYear=currentMonthYear.split(" ")[1];
        if(currentMonth===checkinMonth && currentYear===checkinYear){

            break;
        }
        await page.locator("button[aria-label='Next month']").click();
    }

    // select the specified check-in date
    const checkinDateElements= await page.locator(".b8fcb0c66a td").nth(0).all();
    for(let dateElement of checkinDateElements)
    {
        const dateText=await dateElement.innerText();
        if(dateText===chechinDate)
        {
            await dateElement.click();
            break;
        }
    }

    // select check-out date
    const checkoutDate:string="25";
    const checkoutMonth:string="August";
    const checkoutYear:string="2026";

    while(true){
        const currentMonthYear= await page.locator("#bui-calendar-month-2026-6").innerText();
        const currentMonth=currentMonthYear.split(" ")[0];
        const currentYear=currentMonthYear.split(" ")[1];
        if(currentMonth===checkoutMonth && currentYear===checkoutYear){
            break;
        }
        await page.locator("button[aria-label='Next month']").click();
    }

    // select the specified check-out date
    // const checkoutDateElements= await page.locator("table.b8fcb0c66a tbody").nth(0).locator("td").all();
    const checkoutDateElements= await page.locator("table.b8fcb0c66a tbody").nth(0);
const allCheckoutDates:Locator= await checkoutDateElements.locator("td");
const allCheckoutDatesArray:Locator[]= await allCheckoutDates.all();
    for(let dateElement of allCheckoutDatesArray)
    {
        const dateText=await dateElement.innerText();
        if(dateText===checkoutDate)
        {
            await dateElement.click();
            break;
        }
    }

})